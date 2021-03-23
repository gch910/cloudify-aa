from app.models import db, Song
from datetime import date

def seed_songs():

  # demo1 = Song(
  #   title='Your Eyez Only',
  #   release_date = date(2016, 12, 9),
  #   song_path = "songs/test_song.mp3",
  #   image_path = 'https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png',
  #   user_id = 1,
  #   genre_id = 1,
  # )
  # demo2 = Song(
  #   title='Leave the door open',
  #   release_date = date(2021, 3, 5),
  #   song_path = "songs/leave_the_door_open.mp3",
  #   image_path = 'https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png',
  #   user_id = 2,
  #   genre_id = 5,
  # )
  # demo3 = Song(
  #   title='Peaches',
  #   release_date = date(2021, 3, 18),
  #   song_path = "songs/peaches.mp3",
  #   image_path = 'https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png',
  #   user_id = 3,
  #   genre_id = 4,
  # )
  # demo4 = Song(
  #   title='Hold On',
  #   release_date = date(2012, 2, 6),
  #   song_path = "songs/hold_on.mp3",
  #   image_path = 'https://edm.com/.image/t_share/MTU5NDY5Nzk2NTUzOTI1OTA1/soundcloud.png',
  #   user_id = 4,
  #   genre_id = 2,
  # )

  gabe1 = Song(
    title='Hold On',
    release_date = date(2012, 2, 6),
    song_path = "https://www.youtube.com/watch?v=Le-3MIBxQTw",
    image_path = 'https://cdn2.thelineofbestfit.com/images/remote/http_cdn2.thelineofbestfit.com/media/2012/04/alabama-shakes-boys-and-girls.jpg',
    user_id = "Alabama Shakes", 
    genre_id = 2,
  )
  gabe2 = Song(
    title='Sound and Color',
    release_date = date(2015, 4, 17),
    song_path = "https://www.youtube.com/watch?v=faG8RiaANek",
    image_path = 'https://consequenceofsound.net/wp-content/uploads/2015/04/alabama-shakes-sound-and-color.jpg',
    user_id = "Alabama Shakes", 
    genre_id = 2,
  )
  gabe3 = Song(
    title='Hang Loose',
    release_date = date(2012, 4, 9),
    song_path = "https://www.youtube.com/watch?v=4sSl11GMkMI",
    image_path = 'https://cdn2.thelineofbestfit.com/images/remote/http_cdn2.thelineofbestfit.com/media/2012/04/alabama-shakes-boys-and-girls.jpg',
    user_id = "Alabama Shakes", 
    genre_id = 2,
  )

  gabe4 = Song(
    title='15 Step',
    release_date = date(2007, 10, 10),
    song_path = "https://www.youtube.com/watch?v=bgsmr7t8zGE",
    image_path = 'https://images-na.ssl-images-amazon.com/images/I/81KWYrlOt7L._SL1254_.jpg',
    user_id = "Radiohead", 
    genre_id = 2,
  )
  
  gabe4 = Song(
    title='15 Step',
    release_date = date(2007, 10, 10),
    song_path = "https://www.youtube.com/watch?v=bgsmr7t8zGE",
    image_path = 'https://images-na.ssl-images-amazon.com/images/I/81KWYrlOt7L._SL1254_.jpg',
    user_id = "Radiohead", 
    genre_id = 2,
  )

  

  db.session.add(demo1)
  db.session.add(demo2)
  db.session.add(demo3)
  db.session.add(demo4)
  db.session.commit()