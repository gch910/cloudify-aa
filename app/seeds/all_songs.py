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
rnb1 = Song(
    title='Pretty Little Birds',
    release_date=date(2017, 6, 9),
    song_path="https://cloudify.s3.amazonaws.com/710f1a8f61994a0eb6692a5c8c230491.mp3",
    image_path='https://cloudify.s3.amazonaws.com/48e56a1a681a4eeea2eb01834308cd5e.jpg',
    user_id=10,
    genre_id=3
)
rnb2 = Song(
    title='Supermodel',
    release_date=date(2017, 6, 9),
    song_path="https://cloudify.s3.amazonaws.com/8c408abf10a241d2adffd158f04a2778.mp3",
    image_path='https://cloudify.s3.amazonaws.com/48e56a1a681a4eeea2eb01834308cd5e.jpg',
    user_id=10,
    genre_id=3
)
rnb3 = Song(
    title='20 Something',
    release_date=date(2017, 6, 9),
    song_path="https://cloudify.s3.amazonaws.com/5ad0b2e561aa40a2a9289b8d256b8157.mp3",
    image_path='https://cloudify.s3.amazonaws.com/48e56a1a681a4eeea2eb01834308cd5e.jpg',
    user_id=10,
    genre_id=3
)
rnb4 = Song(
    title='Wading',
    release_date=date(2014, 9, 9),
    song_path="https://cloudify.s3.amazonaws.com/fb91c781809749fdb3e6c81d8def0598.mp3",
    image_path='https://cloudify.s3.amazonaws.com/6e15691c3b8646ec9be9263594a523ef.jpg',
    user_id=11,
    genre_id=3
)
rnb5 = Song(
    title="It's Cool",
    release_date=date(2014, 9, 9),
    song_path="https://cloudify.s3.amazonaws.com/6b5d20d627e34c6b9ad4c06dd96b3bce.mp3",
    image_path='https://cloudify.s3.amazonaws.com/6e15691c3b8646ec9be9263594a523ef.jpg',
    user_id=11,
    genre_id=3
)
rnb6 = Song(
    title='Pretty Bird',
    release_date=date(2014, 9, 9),
    song_path="https://cloudify.s3.amazonaws.com/20f50988edeb4e8ab3ed0465410af2dc.mp3",
    image_path='https://cloudify.s3.amazonaws.com/6e15691c3b8646ec9be9263594a523ef.jpg',
    user_id=11,
    genre_id=3
)
rnb7 = Song(
    title='Overrated',
    release_date=date(2020, 9, 4),
    song_path="https://cloudify.s3.amazonaws.com/9a2b721975a14061a62e8643148692b8.mp3",
    image_path='https://cloudify.s3.amazonaws.com/a41b5a7124d941f5832282b9806d366a.jpg',
    user_id=12,
    genre_id=3
)
rnb8 = Song(
    title='No Love Lost',
    release_date=date(2020, 9, 4),
    song_path="https://cloudify.s3.amazonaws.com/b4920375b0c2424794c085cedbd1d769.mp3",
    image_path='https://cloudify.s3.amazonaws.com/a41b5a7124d941f5832282b9806d366a.jpg',
    user_id=12,
    genre_id=3
)
rnb9 = Song(
    title='Be Alone',
    release_date=date(2020, 9, 4),
    song_path="https://cloudify.s3.amazonaws.com/7d8cca99b82b4ed295c912a8439791d4.mp3",
    image_path='https://cloudify.s3.amazonaws.com/a41b5a7124d941f5832282b9806d366a.jpg',
    user_id=12,
    genre_id=3
)
rap1 = Song(
    title='Never'
    release_date=date(2017, 3, 10),
    song_path='https://cloudify.s3.amazonaws.com/0a93593e3d434ebc8eaaf081be48f3d7.mp3',
    image_path='https://cloudify.s3.amazonaws.com/6f25696902e74a36b3b28c0aee8e2b57.jpg',
    user_id=13,
    genre_id=1,
)
rap2 = Song(
    title='Working Out'
    release_date=date(2018, 10, 3),
    song_path='https://cloudify.s3.amazonaws.com/a6f8bc5835bf4a95ad8a2d3a7f42aaf0.mp3',
    image_path='https://cloudify.s3.amazonaws.com/a54b5d3c7227418fae3ba830deb2ec22.jpg',
    user_id=13,
    genre_id=1,
)
rap3 = Song(
    title='Slick Talk'
    release_date=date(2018, 12, 5),
    song_path='https://cloudify.s3.amazonaws.com/f32008c50b7e4017b8520ab93ac97279.mp3',
    image_path='https://cloudify.s3.amazonaws.com/d2cdf1f392864bf6956528cc63f3e5bb.jpg',
    user_id=13,
    genre_id=1,
)
rap4 = Song(
    title='Caged Bird'
    release_date=date(2015, 12, 7),
    song_path='https://cloudify.s3.amazonaws.com/0d56a32bf84a4b45b87319bb07a74166.mp3',
    image_path='https://cloudify.s3.amazonaws.com/31dfc6f6467c4800a5b40422b138e0d2.jpeg',
    user_id=14,
    genre_id=1,
)
rap5 = Song(
    title='Apparently'
    release_date=date(2014, 12, 9),
    song_path='https://cloudify.s3.amazonaws.com/8cf3ed6c4f6c4a9ebb84679f184e5d0f.mp3',
    image_path='https://cloudify.s3.amazonaws.com/38752b9560c243bfae674b391955dc31.jpg',
    user_id=14,
    genre_id=1,
)
rap6 = Song(
    title='Crooked Smile'
    release_date=date(2013, 6, 4),
    song_path='https://cloudify.s3.amazonaws.com/eac51f79f9994ab4a760a680a549500e.mp3',
    image_path='https://cloudify.s3.amazonaws.com/c07cceb5696542318dbe6d0568e0acff.jpg',
    user_id=14,
    genre_id=1,
)
rap7 = Song(
    title='Metropolis'
    release_date=date(2014, 10, 21),
    song_path='https://cloudify.s3.amazonaws.com/7c2ec85eeace4d2a946dad8706331b94.mp3',
    image_path='https://cloudify.s3.amazonaws.com/edd887dbfe844216873aec0327416e7b.jpg',
    user_id=15,
    genre_id=1,
)
rap8 = Song(
    title='Fade Away'
    release_date=date(2015, 11, 5),
    song_path='https://cloudify.s3.amazonaws.com/bc5f1f3feac745bbbb00cb4a25e14c3d.mp3',
    image_path='https://cloudify.s3.amazonaws.com/0588f4ecd8e7499e93c3210310fbb999.jpg',
    user_id=15,
    genre_id=1,
)
rap9 = Song(
    title='Young Sinatra III'
    release_date=date(2011, 9, 19),
    song_path='https://cloudify.s3.amazonaws.com/7a6326b181204d2ba990bd589ccb538d.mp3',
    image_path='https://cloudify.s3.amazonaws.com/cc65cc73339a43b08dedb385df6c3b87.jpg',
    user_id=15,
    genre_id=1,
)

pop1 = Song(
    title='Stuck with U(with Justin Bieber)'
    release_date=date(2020, 5, 8),
    song_path='https://cloudify.s3.amazonaws.com/4b1e10f903ac4cb4887c9b40dd39379c.mp3',
    image_path='https://cloudify.s3.amazonaws.com/7d7bfbce1f6c48a69f05c4037562133c.png',
    user_id=16,
    genre_id=4,
)
pop2 = Song(
    title='7 Rings'
    release_date=date(2019, 1, 18),
    song_path='https://cloudify.s3.amazonaws.com/1083d06d6d614a0e9b5f521a826dc187.mp3',
    image_path='https://cloudify.s3.amazonaws.com/eb07b647871946bea6319a8ffd624b86.png',
    user_id=16,
    genre_id=4,
)
pop3 = Song(
    title='34+35'
    release_date=date(2020, 10, 30),
    song_path='https://cloudify.s3.amazonaws.com/75f654fb266d40b5974ff34b00bba9fc.mp3',
    image_path='https://cloudify.s3.amazonaws.com/3fb34c9436cd433db3f71e43f9b923fb.png',
    user_id=16,
    genre_id=4,
)
pop4 = Song(
    title="Don't Start Now"
    release_date=date(2019, 10, 30),
    song_path='https://cloudify.s3.amazonaws.com/a77a7b089e0b421fbe585968a0cfcd8a.mp3',
    image_path='https://cloudify.s3.amazonaws.com/1a0adf82120d42d3a84f18c86aab2475.png',
    user_id=17,
    genre_id=4,
)
pop5 = Song(
    title='New Rules'
    release_date=date(2017, 7, 15),
    song_path='https://cloudify.s3.amazonaws.com/1d0995d690dc49e98bf8e92b0d4afbb1.mp3',
    image_path='https://cloudify.s3.amazonaws.com/833288a7f00046eb96a78070742d6e9f.png',
    user_id=17,
    genre_id=4,
)
pop6 = Song(
    title="We're Good"
    release_date=date(2021, 2, 11),
    song_path='https://cloudify.s3.amazonaws.com/d265168c427642e98b9355562d8aaf83.mp3',
    image_path='https://cloudify.s3.amazonaws.com/9afd7bad736042998fbac4ff997aba60.png',
    user_id=17,
    genre_id=4,
)
pop7 = Song(
    title='Blinding Lights'
    release_date=date(2019, 11, 29),
    song_path='https://cloudify.s3.amazonaws.com/cffdad8c9ecf498bb31e688b485fc81a.mp3',
    image_path='https://cloudify.s3.amazonaws.com/68a0c4b386884021a94c8844588db2fe.png',
    user_id=18,
    genre_id=4,
)
pop8 = Song(
    title='Starboy'
    release_date=date(2016, 11, 26),
    song_path='https://cloudify.s3.amazonaws.com/b71a17f6051f4cf9912c31369a97e423.mp3',
    image_path='https://cloudify.s3.amazonaws.com/ba8c60e6f1c4478fab270e3ab2e45f05.png',
    user_id=18,
    genre_id=4,
)
pop9 = Song(
    title='The Hills'
    release_date=date(2015, 5, 27),
    song_path='https://cloudify.s3.amazonaws.com/7e0acf4011b94456bf17847df2576f7a.mp3',
    image_path='https://cloudify.s3.amazonaws.com/85ff809e61a74588a966ac397143af47.jpg',
    user_id=18,
    genre_id=4,
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

rnbSongs = [rnb1, rnb2, rnb3, rnb4,
            rnb5, rnb6, rnb7,
            rnb8, rnb9]

rapSongs = [rap1, rap2, rap3, rap4,
            rap5, rap6, rap7,
            rap8, rap9]

popSongs = [pop1, pop2, pop3, pop4,
            pop5, pop6, pop7,
            pop8, pop9]

allSongs = electronicSongs + jazzSongs + \
    rockSongs + rnbSongs + rapSongs + popSongs
