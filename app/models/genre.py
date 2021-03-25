from .db import db

class Genre(db.Model):
  __tablename__ = 'genres'

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  name = db.Column(db.String(70), nullable=False)
  songs = db.relationship('Song')

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,

    }