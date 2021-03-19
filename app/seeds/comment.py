from app.models import db, Comment

def seed_comments():

  comment = Comment(content='Straight fire!!!', user_id=1, song_id=1)

  db.session.add(comment)
  db.session.commit()