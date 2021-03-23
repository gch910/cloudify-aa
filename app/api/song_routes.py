from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Song
from app.aws import upload_file_to_s3, allowed_file, get_unique_filename

song_routes = Blueprint('songs', __name__)

@song_routes.route("/")
def songs():
    songs = Song.query.all()
    songsDict = {"songs": [song.to_dict() for song in songs]}
    print(songsDict)
    return songsDict

@song_routes.route('/upload', methods=['POST'])
def song_upload():
    if 'song' not in request.files:
        return {'errors': 'song required'}, 400
    
    song = request.files['song']
    
    if not allowed_file(song.filename):
        return {'errors': 'file type not permitted'}, 400

    song.filename = get_unique_filename(song.filename)

    upload = upload_file_to_s3(song)

    if "url" not in upload:
        ##if the dictionary doesn't have a url key
        ##it means that there was an error when we tried to upload
        ##so we send back that error message
        return upload, 400

    url = upload['url']
    print(url)
    return