from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Import all models so Alembic can see them
from .user_model import User
