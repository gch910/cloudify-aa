from flask.cli import AppGroup
from .users import seed_users, undo_users
from .comment import seed_comments
from .genre import seed_genres
from .like import seed_likes
from .song import seed_songs


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_genres()
    seed_songs()
    seed_likes()
    seed_comments()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
