from .db import db

class Song(db.Model):
  __tablename__='songs'

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  title = db.Column(db.String(1000), nullable=False )
  release_date = db.Column(db.Date, nullable=False)
  song_path = db.Column(db.String(1000), nullable=False)
  image_path = db.Colunm(db.String(1000), default='https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png' nullable=False)
  user_id = db.Column(db.Integer, nullable=False, ForeignKey='users.id')
  genre_id = db.Column(db.Integer, nullable=False, ForeignKey='genres.id')
  genre = db.relationship('Genre')
  users = db.relationship('User', back_populate='songs')
  likes = db.relationship('Like', back_populate='songs')
  comments = db.relationship('Comment', back_populate='songs')
