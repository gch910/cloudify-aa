from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    allusers = ["Alabama Shakes", "Radiohead", "Gary Clark Jr.",
                "Miles Davis", "Thelonious Monk", "John Scofield",
                'Daft Punk', 'Rustie', 'Deadmaus', 'SZA', 'Jhene Aiko',
                'Blxst', 'JID', 'J. Cole', 'Logic',
                'Ariana Grande', 'Dua Lipa', 'The Weeknd']\

    for user in allusers:
        add = User(username=user,
                   email=f'{user}@cloudify.com', password='password')
        db.session.add(add)

    demo1 = User(username='Demo', email='demo@lition.com',
                 password='password')

    db.session.add(demo1)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
