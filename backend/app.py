# app.py

from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from config import Config

from models import db

# ✅ Import models here before init_app
from models import user_model  

from auth.routes import auth_bp

migrate = Migrate()

def create_app():
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object(Config)

    CORS(app)
    JWTManager(app)

    db.init_app(app)
    migrate.init_app(app, db)   # ✅ models are known before this call

    app.register_blueprint(auth_bp, url_prefix="/auth")

    @app.route('/health')
    def health_check():
        return {"status": "healthy", "message": "StudySync API is running"}

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
