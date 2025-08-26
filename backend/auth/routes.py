from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt
from .utils import  verify_google_token
from models.user_model import db, User
from models.blacklist_model import TokenBlacklist

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    google_token = data.get('google_token')

    google_user = verify_google_token(google_token)
    if not google_user:
        return jsonify({"error": "Invalid Google token"}), 401
    
    email = google_user["email"]
    name = google_user.get("name", "New user")

    user = User.query.filter_by(email=email).first()
    if user:
        token = create_access_token(identity=email)
        return jsonify({"error": "User already exists. Logged in successfully", "token": token}), 200
    

    new_user = User(name=name, email=email)
    db.session.add(new_user)
    db.session.commit()

    token = create_access_token(identity=email)

    return jsonify({"message":"User registered successfully", "token": token}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    google_token = data.get('google_token')

    google_user = verify_google_token(google_token)
    if not google_user:
        return jsonify({"error": "Invalid Google token"}), 401
    
    email = google_user["email"]
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"error": "User not found. Please register first"}), 404
    
    token = create_access_token(identity=email)
    return jsonify({"message":"User logged in successfully", "token": token}), 200

@auth_bp.route('/logout', methods=['POST'])
@jwt_required
def logout():
    jti = get_jwt()['jti']
    db.session.add(TokenBlacklist(jti=jti))
    db.session.commit()
    return jsonify({"message": "User logged out successfully"}), 200