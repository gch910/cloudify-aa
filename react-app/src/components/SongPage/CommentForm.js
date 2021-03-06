import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUserComment, userLike, getSongLiked } from "../../store/songs";


const CommentForm = ({ userId, newComment, setNewComment }) => {
  const { songId } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const history = useHistory();
  const sessionUser = useSelector((state) => state.user);
  const songLiked = useSelector((state) => state.songs?.currentSong?.liked)

  const likeSong = (e) => {
    e.preventDefault();
    dispatch(userLike(songId, userId));
    return setTimeout(() => {
      setLiked(true);
    }, 100);
  };

  // let variable;
  // const something = likes?.forEach(like => {
  //   if(like.user_id == 1) {
  //     variable = true;
  //     return
  //   }
  // })

  const commentSubmit = async (e) => {
    e.preventDefault();

    if (!sessionUser?.user) history.push("/login");

    const userComment = {
      user_id: userId,
      content: comment,
    };
    await dispatch(postUserComment(userComment, songId));
  };

  useEffect(async () => {
    setComment("");
    await dispatch(getSongLiked(songId)).then((res) => setLiked(res))
  }, [newComment, liked, songLiked]);

  const newCommentSubmit = () => {
    return setTimeout(() => {
      setNewComment(true);
    }, 10);
  };
  console.log("song is liked!", songLiked)

  return (
    <div id="comment-form-div">
      <div id="like-button-div">
        {liked || songLiked ? (
          <button onClick={likeSong} id="heart-button">
            Liked<i className="fas fa-heart"></i>
          </button>
        ) : (
          <button onClick={likeSong} id="heart-button">
            Like<i className="far fa-heart"></i>
          </button>
        )}
      </div>
      <form id="comment-form" onSubmit={commentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="comment-text"
          placeholder="Comment"
        ></textarea>
        <button
          onClick={newCommentSubmit}
          id="comment-submit-button"
          type="submit"
          className="no-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
