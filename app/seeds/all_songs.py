from app.models import Song
from datetime import date

electronic1 = Song(
    title='Giorgio by Moroder',
    release_date=date(2013, 5, 17),
    song_path="https://cloudify.s3.amazonaws.com/2fdafe094f7141458cba93cbf1654597.mp3",
    image_path='https://cloudify.s3.amazonaws.com/a46c9ba24824419fab120653abfdc2ef.jpg',
    user_id=7,
    genre_id=6,
)
electronic2 = Song(
    title="Doin' It Right",
    release_date=date(2013, 5, 17),
    song_path="https://cloudify.s3.amazonaws.com/2ef37c13d6fc439eb2beb243fb7fa4cf.mp3",
    image_path='https://cloudify.s3.amazonaws.com/a46c9ba24824419fab120653abfdc2ef.jpg',
    user_id=7,
    genre_id=6,
)
electronic3 = Song(
    title='Beyond',
    release_date=date(2013, 5, 17),
    song_path="https://cloudify.s3.amazonaws.com/197c1b4b1aba4431aa03b3f3d77057b3.mp3",
    image_path='https://cloudify.s3.amazonaws.com/a46c9ba24824419fab120653abfdc2ef.jpg',
    user_id=7,
    genre_id=6,
)

electronic4 = Song(
    title='Surph',
    release_date=date(2011, 10, 10),
    song_path="https://cloudify.s3.amazonaws.com/b4052293b1674da68137ac5887c5cfc7.mp3",
    image_path='https://cloudify.s3.amazonaws.com/ab816606cf4b4ca399337913057468c0.jpg',
    user_id=8,
    genre_id=6
)
electronic5 = Song(
    title='Ultra Thizz',
    release_date=date(2011, 10, 10),
    song_path="https://cloudify.s3.amazonaws.com/330431feed0c4abb9c32fbc25b870292.mp3",
    image_path='https://cloudify.s3.amazonaws.com/ab816606cf4b4ca399337913057468c0.jpg',
    user_id=8,
    genre_id=6
)
electronic6 = Song(
    title='Globes',
    release_date=date(2011, 10, 10),
    song_path="https://cloudify.s3.amazonaws.com/90e9784c0b6644fc98c9afb7f75db71a.mp3",
    image_path='https://cloudify.s3.amazonaws.com/ab816606cf4b4ca399337913057468c0.jpg',
    user_id=8,
    genre_id=6
)
electronic7 = Song(
    title='Soma',
    release_date=date(2009, 9, 22),
    song_path="https://cloudify.s3.amazonaws.com/ce42021fbbe84371831110e46249fa2d.mp3",
    image_path='https://cloudify.s3.amazonaws.com/6b98c454f8814d639255f46f8a44c7f1.jpg',
    user_id=9,
    genre_id=6
)
electronic8 = Song(
    title="Ghosts 'n' Stuff",
    release_date=date(2009, 9, 22),
    song_path="https://cloudify.s3.amazonaws.com/cfc3c5c599d44c72b01fb39818ed0f44.mp3",
    image_path='https://cloudify.s3.amazonaws.com/6b98c454f8814d639255f46f8a44c7f1.jpg',
    user_id=9,
    genre_id=6
)
electronic9 = Song(
    title='Strobe',
    release_date=date(2009, 9, 22),
    song_path="https://cloudify.s3.amazonaws.com/a0ccc627f21141619bbb370dd3ae3e7a.mp3",
    image_path='https://cloudify.s3.amazonaws.com/6b98c454f8814d639255f46f8a44c7f1.jpg',
    user_id=9,
    genre_id=6
)
rock1 = Song(
    title='Hold On',
    release_date=date(2012, 2, 6),
    song_path="https://cloudify.s3.amazonaws.com/8d01684af6984097bff7a83e832e8fe4.mp3",
    image_path='https://cloudify.s3.amazonaws.com/4ac7d4e806974bbba89beebe94cd5305.jpg',
    user_id=1,
    genre_id=2,
)
rock2 = Song(
    title='Sound and Color',
    release_date=date(2015, 4, 17),
    song_path="https://cloudify.s3.amazonaws.com/4f77ee73c02949f6bf1ca79d4bc35e70.mp3",
    image_path='https://cloudify.s3.amazonaws.com/c3a4616b02e345b7a4a316df7ed41db4.jpg',
    user_id=1,
    genre_id=2,
)
rock3 = Song(
    title='Hang Loose',
    release_date=date(2012, 4, 9),
    song_path="https://cloudify.s3.amazonaws.com/e5d4a8bb418f463ab5bf4e94c72efa69.mp3",
    image_path='https://cloudify.s3.amazonaws.com/13eac44b2d224c06a60fb27cca5fc53e.jpg',
    user_id=1,
    genre_id=2,
)

rock4 = Song(
    title='15 Step',
    release_date=date(2007, 10, 10),
    song_path="https://cloudify.s3.amazonaws.com/82b5dd6baef549c6a3a1648ec487924a.mp3",
    image_path='https://cloudify.s3.amazonaws.com/13eac44b2d224c06a60fb27cca5fc53e.jpg',
    user_id=2,
    genre_id=2,
)

rock5 = Song(
    title='Bodysnatchers',
    release_date=date(2007, 10, 10),
    song_path="https://cloudify.s3.amazonaws.com/b9b64ab380fe456fa8400d674186c2a0.mp3",
    image_path='https://cloudify.s3.amazonaws.com/13eac44b2d224c06a60fb27cca5fc53e.jpg',
    user_id=2,
    genre_id=2,
)
rock6 = Song(
    title='Paranoid Android',
    release_date=date(1997, 5, 21),
    song_path="https://cloudify.s3.amazonaws.com/bab219c23c7b4ccf90614d87e7e154da.mp3",
    image_path='https://cloudify.s3.amazonaws.com/40f12681daa54ed8a9ec769d90ef1bed.jpg',
    user_id=2,
    genre_id=2,
)
rock7 = Song(
    title='When My Train Pulls In',
    release_date=date(2012, 10, 22),
    song_path="https://cloudify.s3.amazonaws.com/9ef06cf5c9234a11adc355eb3f13f60e.mp3",
    image_path='https://cloudify.s3.amazonaws.com/7c05b9a754454bc7ad5bd9584c081916.jpg',
    user_id=3,
    genre_id=2,
)
rock8 = Song(
    title='Bright Lights',
    release_date=date(2012, 10, 22),
    song_path="https://cloudify.s3.amazonaws.com/38a273c714cb4352802826e3e3bcb52e.mp3",
    image_path='https://cloudify.s3.amazonaws.com/7c05b9a754454bc7ad5bd9584c081916.jpg',
    user_id=3,
    genre_id=2,
)
rock9 = Song(
    title='What About Us',
    release_date=date(2019, 2, 22),
    song_path="https://cloudify.s3.amazonaws.com/a7d200bab06f4e79ac41920b4b56d36c.mp3",
    image_path='https://cloudify.s3.amazonaws.com/aaa66b9a894243a09905e1c3f936045e.jpg',
    user_id=3,
    genre_id=2,
)

jazz1 = Song(
    title='Blue In Green',
    release_date=date(1959, 8, 17),
    song_path="https://cloudify.s3.amazonaws.com/271d29595c3a449c92cf1b988eb873a5.mp3",
    image_path='https://cloudify.s3.amazonaws.com/b3bff695d80148ae99c293ffafd31029.jpg',
    user_id=4,
    genre_id=5,
)
jazz2 = Song(
    title='So What',
    release_date=date(1959, 8, 17),
    song_path="https://cloudify.s3.amazonaws.com/271779e4a5ea47818dfb23846f9d4dc0.mp3",
    image_path='https://cloudify.s3.amazonaws.com/b3bff695d80148ae99c293ffafd31029.jpg',
    user_id=4,
    genre_id=5,
)
jazz3 = Song(
    title='All Blues',
    release_date=date(1959, 8, 17),
    song_path="https://cloudify.s3.amazonaws.com/36aeedca40564bbe84352c34401ac597.mp3",
    image_path='https://cloudify.s3.amazonaws.com/b3bff695d80148ae99c293ffafd31029.jpg',
    user_id=4,
    genre_id=5,
)
jazz4 = Song(
    title="Monk's Dream",
    release_date=date(1963, 3, 10),
    song_path="https://cloudify.s3.amazonaws.com/3fac34b8e5b04b7ab36ac3e29f4497f7.mp3",
    image_path='https://cloudify.s3.amazonaws.com/57f701d9e5564c929c1011a63080e6c3.jpg',
    user_id=5,
    genre_id=5,
)
jazz5 = Song(
    title="Evidence",
    release_date=date(1948, 7, 2),
    song_path="https://cloudify.s3.amazonaws.com/addf616878e64c028b50b425fd0c9b88.mp3",
    image_path='https://cloudify.s3.amazonaws.com/d27d54be76ed492eab494c784b75fadb.jpg',
    user_id=5,
    genre_id=5,
)
jazz6 = Song(
    title="Well You Needn't",
    release_date=date(1957, 11, 1),
    song_path="https://cloudify.s3.amazonaws.com/10a8b9f08b2b477fb0b88f3826c935e6.mp3",
    image_path='https://cloudify.s3.amazonaws.com/d27d54be76ed492eab494c784b75fadb.jpg',
    user_id=5,
    genre_id=5,
)
jazz7 = Song(
    title="I'll Take Les",
    release_date=date(1994, 8, 9),
    song_path="https://cloudify.s3.amazonaws.com/d0e6f611b9f84c5ea683c74f1aba8c15.mp3",
    image_path='https://cloudify.s3.amazonaws.com/dc38d774547d49e2b939fa557678fedf.jpg',
    user_id=6,
    genre_id=5,
)
jazz8 = Song(
    title="A Go Go",
    release_date=date(1997, 1, 1),
    song_path="https://cloudify.s3.amazonaws.com/c44d2d38b4194d21ae1af1ac27dc2aa9.mp3",
    image_path='https://cloudify.s3.amazonaws.com/85053a7fa5964709860cbad265ef3ada.jpg',
    user_id=6,
    genre_id=5,
)
jazz9 = Song(
    title="Camelus",
    release_date=date(2013, 7, 2),
    song_path="https://cloudify.s3.amazonaws.com/41a6ae8ab06246e79a093bd7d843995c.mp3",
    image_path='https://cloudify.s3.amazonaws.com/01d40ae38bb34567871f773118447e96.jpg',
    user_id=6,
    genre_id=5,
)

electronicSongs = [electronic1, electronic2, electronic3, electronic4,
                   electronic5, electronic6, electronic7,
                   electronic8, electronic9]

jazzSongs = [jazz1, jazz2, jazz3, jazz4,
             jazz5, jazz6, jazz7,
             jazz8, jazz9]

rockSongs = [rock1, rock2, rock3, rock4,
             rock5, rock6, rock7,
             rock8, rock9]

allSongs = electronicSongs + jazzSongs + rockSongs
