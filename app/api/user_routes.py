from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Song
from app.aws import (
    upload_file_to_s3, allowed_image_file, get_unique_filename)


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

    return songsDict


@user_routes.route('/image/upload/<int:user_id>', methods=['POST'])
def upload_image(user_id):
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_image_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    user = User.query.get(user_id)
    print(user)
    user.img = url
    db.session.add(user)
    db.session.commit()
    return {"url": url}


