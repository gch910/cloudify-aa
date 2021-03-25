from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Song, Genre
from app.aws import allowed_image_file, upload_file_to_s3, allowed_audio_file, get_unique_filename

song_routes = Blueprint('songs', __name__)


@song_routes.route("/")
def songs():
    songs = Song.query.all()
    songsDict = {"songs": [song.to_dict() for song in songs]}
    return songsDict


@song_routes.route('/upload', methods=['POST'])
def song_upload():
    print(request)
    defaultImage = False
    if 'song' not in request.files:
        return {'errors': 'song required'}, 400
    if 'image' not in request.files:
        defaultImage = True

    song = request.files['song']
    image = ''
    if defaultImage:
        image = defaultImage
    else:
        image = request.files['image']

    if not allowed_audio_file(song.filename):
        return {'errors': 'file type not permitted'}, 400

    song.filename = get_unique_filename(song.filename)

    song_upload = upload_file_to_s3(song)

    if "url" not in song_upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to song_upload
        # so we send back that error message
        return song_upload, 400

    song_url = song_upload['url']
    image_url = ''
    if not defaultImage:
        if not allowed_image_file(image.filename):
            return {'errors': 'file type not permitted'}, 400

        image.filename = get_unique_filename(image.filename)

        image_upload = upload_file_to_s3(image)

        if "url" not in image_upload:
            # if the dictionary doesn't have a url key
            # it means that there was an error when we tried to song_upload
            # so we send back that error message
            return image_upload, 400
        image_url = image_upload['url']

    else:
        image_url = 'https://cloudify.s3-us-west-2.amazonaws.com/3e29a4568cc911eb8dcd0242ac130003.png'

    return {'image_url': image_url, 'song_url', song_url}, 200


@song_routes.route('/genres')
def song_genre():
    genres = Genre.query.all()
    genresDict = {"genres": [genre.to_dict() for genre in genres]}
    return genresDict
