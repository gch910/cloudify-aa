from app.models import db, Song
from datetime import date
from app.aws import upload_file_to_s3
from app.seeds.all_songs import allSongs


def seed_songs():

    for song in allSongs:
        db.session.add(song)
    db.session.commit()
