from .db import db

class Song(db.Model):
  __tablename__='songs'

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  title = db.Column(db.String(1000), nullable=False )
  release_date = db.Column(db.Date, nullable=False)
  song_path = db.Column(db.String(1000), nullable=False)
  image_path = db.Colunm(db.String(1000), nullable=False)
  user_id = db.Column(db.Integer, nullable=False)
  genre_id = db.Column(db.Integer, nullable=False)