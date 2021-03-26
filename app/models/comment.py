from .db import db


class Comment(db.Model):

  __tablename__ = 'comments'

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  content = db.Column(db.String(255), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  song_id = db.Column(db.Integer,  db.ForeignKey('songs.id'), nullable=False)

  users = db.relationship('User', back_populates='comments')
  songs = db.relationship('Song', back_populates='comments')

  def to_dict(self):
    return {
      "content": self.content,
        }

