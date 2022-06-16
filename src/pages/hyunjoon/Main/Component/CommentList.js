import React from 'react';
import { useState } from 'react';

function CommentList({ userName, userComment, index, onRemove }) {
  const [count, setCount] = useState(false);

  function redLikeBtn() {
    setCount(!count);
  }

  return (
    <p>
      <strong>{userName + ' '}</strong>
      {userComment}
      <img
        onClick={redLikeBtn}
        className="commentLike"
        src={
          count
            ? 'images/hyunjoon/commentlikethis.png'
            : 'images/hyunjoon/commentlike.png'
        }
        alt="likeImg"
        arc="commentLike"
      />
      <button className="deleteBtn" onClick={() => onRemove(index)}>
        X
      </button>
    </p>
  );
}
export default CommentList;
