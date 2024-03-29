import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../store/songs";
import { deleteUserComment, getAllLikes } from "../../store/songs";
import CommentForm from "./CommentForm";
import "./SongPage.css";
import PlayButton from "../PlayButton";

const SongPage = () => {
  const { songId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.user);
  // const allLikes = useSelector((state) => state.songs.likes);
  // const artist = useSelector((state) => state.users);
  const song = useSelector((state) => state.songs?.currentSong);
  const [isLoaded, setIsLoaded] = useState(false);
  const [deleteShown, setDeleteShown] = useState(false);
  const [newComment, setNewComment] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [deleted, setDeleted] = useState(false);

  let comments = song?.comments;
  let userId = sessionUser?.user?.id;

  const buttonClassname = (index) => {
    if (index === hoverIndex) return "active";
    else return "button inactive";
  };

  // const someFunction = () => {

  //   if (allLikes && sessionUser.user) {
  //     return allLikes?.forEach((like) => {
  //       if (sessionUser?.user?.id == like.user_id) {
  //         return setLiked(true);
  //       }
  //     });
  //   }
  // };

  const deleteComment = (e) => {
    console.log(userId, e.target.className.split(" ")[1]);
    if (userId == e.target.className.split(" ")[1]) {
      dispatch(deleteUserComment(e.target.id));
      setDeleted(true);
      setTimeout(() => {
        setDeleted(false);
      }, 100);
    }
  };

  useEffect(() => {
    dispatch(getSong(songId)).then(() => setIsLoaded(true));
    dispatch(getAllLikes());

    return setNewComment(false);
  }, [dispatch, newComment, deleted, songId]);

  return (
    isLoaded && (
      <div id="song-page-container">
        <div id="song-page-contents">
          <div id="song-header">
            <div id="song-image-div">
              <img id="song-image" src={song.image_path} alt="song" />
            </div>
            <div id="button-wrapper">
              <PlayButton songId={songId} />
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
            <img id="song-profile-image" src={song?.user?.img} alt="profile" />
            <NavLink to={`/profile/${song.user.id}`}>
              <h3 id="song-profile-image-h3">{song.user.username}</h3>
            </NavLink>
          </div>
          <div id="comments-div">
            {comments.map((comment, idx) => (
              <div
                className="comment-div"
                onMouseEnter={() => (setDeleteShown(true), setHoverIndex(idx))}
                onMouseLeave={() => (
                  setDeleteShown(false), setHoverIndex(null)
                )}
              >
                <div id="image-username-comment">
                  <img
                    id="user-comment-image"
                    src={comment.user.img}
                    alt="profile"
                  />
                  <h3 id="comment-username">{comment.user.username}:</h3>
                  <p>{comment.content}</p>
                </div>
                {deleteShown && userId === comment.user_id && (
                  // <div id="delete-comment-button-div">
                  <button
                    className={`delete-comment-button ${
                      comment.user_id
                    } ${buttonClassname(idx)} no-outline`}
                    id={comment.id}
                    userId={comment.user_id}
                    onClick={deleteComment}
                  >
                    Delete
                  </button>
                  // </div>
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
