from app.models import db, Comment

def seed_comments():

  comment1 = Comment(content='Straight fire!!!', user_id=1, song_id=1)
  comment2 = Comment(content='So good', user_id=1, song_id=1)
  comment3 = Comment(content='Love that beat', user_id=1, song_id=1)
  comment4= Comment(content='Could use some work', user_id=1, song_id=1)
  comment5 = Comment(content='This song is amazing', user_id=1, song_id=1)
  comment6 = Comment(content='dangggggggggggggggggggggggg', user_id=1, song_id=1)

  db.session.add(comment1)
  db.session.add(comment2)
  db.session.add(comment3)
  db.session.add(comment4)
  db.session.add(comment5)
  db.session.add(comment6)
  db.session.commit()