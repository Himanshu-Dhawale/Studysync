from flask import Flask 
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from models.user_model import db
from config import Config
from auth.routes import auth_bp

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
JWTManager(app)
db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(auth_bp, url_prefix="/auth")

@app.route('/health')
def health_check():
    return {"status": "healthy", "message": "StudySync API is running"}

if __name__ =="__main__":
    app.run(debug=True)