from .db import db

class Like(db.Model):
  __tablename__ = 'likes'

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  user_id = db.Column(db.Integer, nullable=False)
  song_id = db.Colmun(db.Integer, nullable=False)

  users = db.relationship('User', back_populate='likes')
  songs = db.relationship('Song', back_populate='likes')
