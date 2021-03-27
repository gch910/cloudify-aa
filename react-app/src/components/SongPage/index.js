import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../store/songs";
import { getArtist } from "../../store/users";
import CommentForm from "./CommentForm";
import "./SongPage.css";

const SongPage = () => {
  const { songId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.user);
  const artist = useSelector((state) => state.users);
  const song = useSelector((state) => state.songs.currentSong);
  const [isLoaded, setIsLoaded] = useState(false);

  const [newComment, setNewComment] = useState(false)

  let comments;
  let userId;

  if (sessionUser.user) userId = sessionUser?.user?.id;

  if (isLoaded) {
    comments = song.comments;
  }

  useEffect(async () => {
    await dispatch(getSong(songId)).then(() => setIsLoaded(true));

    return setNewComment(false)
  }, [dispatch, newComment]);

  return (
    isLoaded && (
      <div id="song-page-container">
        <div id="song-page-contents">
          <div id="song-header">
            <div id="song-image-div">
              <img id="song-image" src={song.image_path} alt="song" />
            </div>
            <div id="play-icon-div">
              <img
                id="play-icon"
                src="https://alohajarren.github.io/webpage-mockup/images/songplay.png"
                alt="icon"
              ></img>
            </div>
            <div id="song-headers">
              <h1 id="song-title">{song.title}</h1>
              <h3 id="song-username">{song.user.username}</h3>
            </div>
            <div id="song-genre-div">
              <h3 id="song-genre"># {song.genre.name}</h3>
            </div>
          </div>
          <CommentForm userId={userId} newComment={newComment} setNewComment={setNewComment} />
          <div id="song-profile-image-div">
            <img
              id="song-profile-image"
              src="https://i.stack.imgur.com/l60Hf.png"
              alt="profile"
            />
          </div>
          <div id="comments-div">
            {song.comments.map((comment) => (
              <div className="comment-div">
                <img
                  id="user-comment-image"
                  src="https://i.stack.imgur.com/l60Hf.png"
                  alt="profile"
                />
                {comment.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default SongPage;
