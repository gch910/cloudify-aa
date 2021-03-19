from app.models import db, Song
from datetime import date

def seed_songs():

  demo1 = Song(
    title='Your Eyez Only',
    release_date = date(2016, 12, 9),
    song_path = "songs/test_song.mp3",
    image_path = 'https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png',
    user_id = 1,
    genre_id = 1,
  )

  db.session.add(demo1)
  db.session.commit()