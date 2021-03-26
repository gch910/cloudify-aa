from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Song


artist_routes = Blueprint('artists', __name__)


@artist_routes.route("/<int:id>")
def artist(id):
    artist = User.query.get(id)
    current_artist = {"artist": artist.to_dict()}
    return current_artist
