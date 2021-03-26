import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const sessionUser = useSelector(state => state.user)

  const commentSubmit = () => {
    const userComment = {
      user_id: sessionUser.user.id,
      content: comment
    };
  };
  return (
    <form onSubmit={commentSubmit}>
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
  );
};

export default CommentForm;
