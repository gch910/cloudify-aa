from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User, Genre


class CommentForm(FlaskForm):
    
    comment = TextAreaField("comment", validators=[DataRequired()])