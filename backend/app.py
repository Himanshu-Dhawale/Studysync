from flask import Flask 
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate  # Import Flask-Migrate
from models.user_model import db
from models.blacklist_model import TokenBlacklist
from config import Config
from auth.routes import auth_bp

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
jwt = JWTManager(app)
db.init_app(app)
migrate = Migrate(app, db) # Initialize Flask-Migrate

@jwt.token_in_blocklist_loader
def check_if_token_in_blacklist(jwt_header, jwt_payload):
    jti = jwt_payload["jti"]
    token = db.session.query(TokenBlacklist.id).filter_by(jti=jti).one_or_none()
    return token is not None


app.register_blueprint(auth_bp, url_prefix="/auth")

@app.route('/health')
def health_check():
    return {"status": "healthy", "message": "StudySync API is running"}

if __name__ =="__main__":
    app.run(debug=True)