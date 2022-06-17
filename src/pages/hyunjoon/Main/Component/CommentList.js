import React from 'react';
import { useState } from 'react';

function CommentList({ userName, userComment, index, onRemove }) {
  //boolean을 다루는 변수는 의문형으로 이름짓는것이 일반적입니다.
  //comment마다 있는 like 버튼의 boolean 상태를 나타낸다면,
  //isCommentLiked, setIsCommentLiked 쪽이 어울려보입니다.
  const [count, setCount] = useState(false);

  //좋아요 버튼을 키고 끄는 기능을 하고 있네요
  // switch 혹은 toggle 이란 단어가 적절할 것 같습니다.
  //toggleLikeIcon, switchIcon
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
