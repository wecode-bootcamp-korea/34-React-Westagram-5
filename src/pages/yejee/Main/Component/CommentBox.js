import React, { useState } from 'react';

const CommentBox = ({
  comment,
  setComment,
  postedComment,
  setPostedComment,
  commentIndex,
}) => {
  const [isCommentLike, setIsCommentLike] = useState(false);

  const toggleCommentLike = () => {
    setIsCommentLike(!isCommentLike);
  };

  const removeComment = e => {
    e.preventDefault();
    setPostedComment(
      postedComment.filter((ele, index) => commentIndex !== index)
    );
  };

  return (
    <span className="postedComment">
      <span>
        <span className="accountId">kiki </span>
        {comment}
      </span>
      <span>
        <button onClick={toggleCommentLike}>
          <img
            src={
              isCommentLike
                ? 'images/yejee/redheart.png'
                : 'images/yejee/heart.png'
            }
            className="commentLike"
          />
        </button>
        <button onClick={removeComment}>x</button>
      </span>
    </span>
  );
};

export default CommentBox;
