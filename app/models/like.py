from .db import db

class Like(db.Model):
  __tablename__ = 'likes'

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  user_id = db.Column(db.Integer,  db.ForeignKey('users.id'), nullable=False,)
  song_id = db.Column(db.Integer, db.ForeignKey('songs.id'), nullable=False, )

  users = db.relationship('User', back_populates='likes')
  songs = db.relationship('Song', back_populates='likes')
