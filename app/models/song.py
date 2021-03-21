from .db import db

class Song(db.Model):
  __tablename__='songs'

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  title = db.Column(db.String(1000), nullable=False )
  release_date = db.Column(db.Date, nullable=False)
  song_path = db.Column(db.String(1000), nullable=False)
  image_path = db.Column(db.String(1000), default='https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png', nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  genre_id = db.Column(db.Integer, db.ForeignKey('genres.id'), nullable=False)
  
  genre = db.relationship('Genre')
  users = db.relationship('User', back_populates='songs')
  likes = db.relationship('Like', back_populates='songs')
  comments = db.relationship('Comment', back_populates='songs')

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "release_date": self.release_date,
      "song_path": self.song_path,
      "image_path": self.image_path,
      "user_id": self.user_id,
      "genre_id": self.genre_id
    }
