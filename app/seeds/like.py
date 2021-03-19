from app.models import db, Like

def seed_likes():

  like = Like(user_id=1, song_id=1)

  db.session.add(like)
  db.session.commit()