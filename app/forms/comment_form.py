from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User, Genre


class CommentForm(FlaskForm):
    content = TextAreaField("content", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    song_id = IntegerField("song_id", validators=[DataRequired()])

