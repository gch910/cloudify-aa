import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postUserComment } from "../../store/songs";

const CommentForm = ({userId}) => {
  const { songId } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  // const sessionUser = useSelector((state) => state.user);

  const commentSubmit = async (e) => {
    e.preventDefault();
    const userComment = {
      user_id: userId,
      content: comment,
    };
    console.log(songId, userComment);
    await dispatch(postUserComment(userComment, songId));
  };

  return (
    <div id="comment-form-div">
      <form id="comment-form" onSubmit={commentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="comment-text"
          placeholder="Comment"
        ></textarea>
        <button id="comment-submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
