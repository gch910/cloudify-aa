from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError

class SearchForm(FlaskForm):
    search = TextAreaField("search", validators=[DataRequired()])