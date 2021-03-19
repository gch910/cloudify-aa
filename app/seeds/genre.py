from app.models import db, Genre

def seed_genres():

  genre1 = Genre(name='Rap')
  genre2 = Genre(name='Rock')
  genre3 = Genre(name='Hip-Hop')
  genre4 = Genre(name='Pop')
  genre5 = Genre(name='Soul')
  genre6 = Genre(name='House')
  genre7 = Genre(name='Celtic')

  db.session.add(genre1)
  db.session.add(genre2)
  db.session.add(genre3)
  db.session.add(genre4)
  db.session.add(genre5)
  db.session.add(genre6)
  db.session.add(genre7)
  db.session.commit()