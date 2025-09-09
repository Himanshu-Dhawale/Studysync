from flask import Blueprint, request, jsonify
from models.user_model import db, User
from sqlalchemy import or_

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/onboarding', methods=['POST'])
def onboarding():
    data = request.get_json()
    current_user_email = data.get('email')

    if not current_user_email:
        return jsonify({'error': 'Email is required'}, 400)
    
    user = User.query.filter_by(email=current_user_email).first()

    if not user:
        user = User(email=current_user_email, name=data.get('name'))
        db.session.add(user)

    user.subjects = data.get('subjects')
    user.goals = data.get('goals')
    user.study_time = data.get('study_time')
    user.session_length = data.get('session_length')
    user.study_style = data.get('study_style')
    user.onboarding_completed = True

    db.session.commit()

    return jsonify({'message': 'Onboarding completed successfully'}), 200

@auth_bp.route('/find_matches', methods=['POST'])
def find_matches():
    data = request.get_json()
    current_user_email = data.get('email')
    
    if not current_user_email:
        return jsonify({"error": "Email is required"}), 400

    current_user = User.query.filter_by(email=current_user_email).first()
    if not current_user:
        return jsonify({"error": "User not found"}), 404

    filters = []
    
    for subject in current_user.subjects:
        filters.append(User.subjects.like(f'%"{subject}"%'))
    
    matches = User.query.filter(
        or_(*filters),
        User.onboarding_completed == True,
        User.id != current_user.id
    ).all()

    result = []
    for user in matches:
        result.append({
            "id": user.id,
            "name": user.name,
            "subjects": user.subjects,
            "goals": user.goals,
            "study_time": user.study_time,
            "session_length": user.session_length,
            "study_style": user.study_style,
        })
        
    return jsonify(result), 200
