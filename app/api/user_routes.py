from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Song


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/songs/<int:id>')
def user_songs(id):
    songs = Song.query.filter_by(user_id=id).all()
    songsDict = {"songs": [song.to_dict() for song in songs]}
    # print(songsDict)
    return songsDict



