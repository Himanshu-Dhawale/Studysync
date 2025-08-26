import os
from dotenv import load_dotenv

load_dotenv()
class Config:
        SECRET_KEY = os.getenv("SECRET_KEY", "supersecret")
        SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "sqlite:///studysync.db")
        SQLALCHEMY_TRACK_MODIFICATIONS = False
        JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "jwt-secret")
        GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")