import React from 'react';
import { useState } from 'react';

function CommentList({ userName, userComment, index, onRemove }) {
  const [likeImg, setLikeImg] = useState('images/hyunjoon/commentlike.png');
  const [count, setCount] = useState(true);

  function redLikeBtn() {
    if (count) {
      setLikeImg('images/hyunjoon/commentlikethis.png');
      setCount(false);
    }
    if (!count) {
      setLikeImg('images/hyunjoon/commentlike.png');
      setCount(true);
    }
  }

  return (
    <p>
      <strong>{userName + ' '}</strong>
      {userComment}
      <img
        onClick={redLikeBtn}
        className="commentLike"
        src={likeImg}
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
