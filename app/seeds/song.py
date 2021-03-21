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
  demo2 = Song(
    title='Leave the door open',
    release_date = date(2021, 3, 5),
    song_path = "songs/leave_the_door_open.mp3",
    image_path = 'https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png',
    user_id = 2,
    genre_id = 5,
  )
  demo3 = Song(
    title='Peaches',
    release_date = date(2021, 3, 18),
    song_path = "songs/peaches.mp3",
    image_path = 'https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png',
    user_id = 3,
    genre_id = 4,
  )
  demo4 = Song(
    title='Hold On',
    release_date = date(2012, 2, 6),
    song_path = "songs/hold_on.mp3",
    image_path = 'https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png',
    user_id = 4,
    genre_id = 2,
  )

  db.session.add(demo1)
  db.session.add(demo2)
  db.session.add(demo3)
  db.session.add(demo4)
  db.session.commit()