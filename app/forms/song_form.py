from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User, Genre


def user_exists(form, field):
    print('Checking if user exists', field.data)
    user_id = field.data
    user = User.query.filter(User.id == user_id).first()
    if not user:
        raise ValidationError('User does not exist')


def genre_exists(form, field):
    print('Checking if user exists', field.data)
    genre_id = field.data
    genre = Genre.query.filter(Genre.id == genre_id).first()
    if not genre:
        raise ValidationError('Genre does not exist')


class SongForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    release_date = DateField('date')
    song_path = StringField('song_path', validators=[DataRequired()])
    image_path = StringField('image_path', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired(), user_exists])
    genre_id = IntegerField('genre_id', validators=[
                            DataRequired(), genre_exists])
