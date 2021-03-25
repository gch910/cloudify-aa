from app.models import db, Genre


def seed_genres():

    genre1 = Genre(name='Rap')  # Josh
    genre2 = Genre(name='Rock')  # Gabriel
    genre3 = Genre(name='R&B')  # Jevon
    genre4 = Genre(name='Pop')  # Josh
    genre5 = Genre(name='Jazz')  # Gabriel
    genre6 = Genre(name='Electronic')  # Jevon

    db.session.add(genre1)
    db.session.add(genre2)
    db.session.add(genre3)
    db.session.add(genre4)
    db.session.add(genre5)
    db.session.add(genre6)
    db.session.commit()
