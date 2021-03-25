from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Song

song_routes = Blueprint('songs', __name__)

@song_routes.route("/")
def songs():
    songs = Song.query.all()
    songsDict = {"songs": [song.to_dict() for song in songs]}
    return songsDict

@song_routes.route("/<int:id>")
def song_by_id(id):
    song = Song.query.get(id)
    songDict = {"song": song.to_dict()}
    return songDict

