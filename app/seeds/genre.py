from app.models import db, Genre

def seed_genres():

  genre1 = Genre(name='Rap')
  genre2 = Genre(name='Rock')
  genre3 = Genre(name='R&B')
  genre4 = Genre(name='Pop')
  genre5 = Genre(name='Electronic')
  genre6 = Genre(name='Jazz')

  db.session.add(genre1)
  db.session.add(genre2)
  db.session.add(genre3)
  db.session.add(genre4)
  db.session.add(genre5)
  db.session.add(genre6)
  db.session.add(genre7)
  db.session.add(genre8)
  db.session.commit()