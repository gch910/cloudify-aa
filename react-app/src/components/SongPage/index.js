import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../store/songs";
import { getArtist } from "../../store/users";
import { deleteUserComment, getAllLikes } from "../../store/songs";
import CommentForm from "./CommentForm";
import "./SongPage.css";
import PlayButton from "../PlayButton";

const SongPage = () => {
  const { songId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.user);
  const allLikes = useSelector((state) => state.songs.likes);
  const artist = useSelector((state) => state.users);
  const song = useSelector((state) => state.songs?.currentSong);
  const [isLoaded, setIsLoaded] = useState(false);

  const [deleteShown, setDeleteShown] = useState(false);

  const [newComment, setNewComment] = useState(false);
  const [deleted, setDeleted] = useState(false);

  let comments;
  let userId;

  // const someFunction = () => {

  //   if (allLikes && sessionUser.user) {
  //     return allLikes?.forEach((like) => {
  //       if (sessionUser?.user?.id == like.user_id) {
  //         return setLiked(true);
  //       }
  //     });
  //   }
  // };

  if (sessionUser.user) userId = sessionUser?.user?.id;

  if (isLoaded) {
    comments = song.comments;
  }

  const deleteComment = (e) => {
    if (userId == e.target.className.split(" ")[1]) {
      dispatch(deleteUserComment(e.target.id));
      setDeleted(true);
      setTimeout(() => {
        setDeleted(false);
      }, 100);
    }
  };

  useEffect(async () => {
    dispatch(getSong(songId)).then(() => setIsLoaded(true));
    dispatch(getAllLikes());

    return setNewComment(false);
  }, [dispatch, newComment, deleted]);

  return (
    isLoaded && (
      <div id="song-page-container">
        <div id="song-page-contents">
          <div id="song-header">
            <div id="song-image-div">
              <img id="song-image" src={song.image_path} alt="song" />
            </div>
            <div id="button-wrapper">
              <PlayButton url={song} />
            </div>
            <div id="song-headers">
              <h1 id="song-title">{song.title}</h1>
              <NavLink to={`/profile/${song.user.id}`}>
                <h3 id="song-username">{song.user.username}</h3>
              </NavLink>
            </div>
            <div id="song-genre-div">
              <h3 id="song-genre"># {song.genre.name}</h3>
            </div>
          </div>
          <CommentForm
            userId={userId}
            newComment={newComment}
            setNewComment={setNewComment}
            sesssionUser={sessionUser}
          />
          <div id="song-profile-image-div">
            <img
              id="song-profile-image"
              src="https://i.stack.imgur.com/l60Hf.png"
              alt="profile"
            />
            <NavLink to={`/profile/${song.user.id}`}>
              <h3 id="song-profile-image-h3">{song.user.username}</h3>
            </NavLink>
          </div>
          <div id="comments-div">
            {song.comments.map((comment) => (
              <div
                className="comment-div"
                onMouseEnter={() => setDeleteShown(true)}
                onMouseLeave={() => setDeleteShown(false)}
              >
                <img
                  id="user-comment-image"
                  src="https://i.stack.imgur.com/l60Hf.png"
                  alt="profile"
                />
                <p>{comment.content}</p>
                {deleteShown && userId == comment.user_id && (
                  <div id="delete-comment-button-div">
                    <button
                      className={`delete-comment-button ${comment.user_id}`}
                      id={comment.id}
                      userId={comment.user_id}
                      onClick={deleteComment}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default SongPage;
