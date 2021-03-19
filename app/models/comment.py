from .db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  content = db.Column(db.String(255), nullable=False)
  user_id = db.Colmun(db.Integer, nullable=False)
  song_id = db.Column(db.Integer, nullable=False)
  