from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.types import JSON

from . import db   # ✅ import shared db instance


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)

    subjects = db.Column(JSON)
    goals = db.Column(JSON)
    study_time = db.Column(JSON)
    session_length = db.Column(JSON)
    study_style = db.Column(JSON)

    onboarding_completed = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f"<User = {self.email}>"