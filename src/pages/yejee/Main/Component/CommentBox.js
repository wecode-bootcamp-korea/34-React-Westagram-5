import React, { useState } from 'react';
import CommentList from './CommentList';
import Nickname from './CommentList';

const CommentBox = ({
  comment,
  setComment,
  postedComment,
  setPostedComment,
  i,
}) => {
  const [commentLike, setCommentLike] = useState(false);

  return (
    <span className="postedComment">
      <span>
        <span className="accountId">kiki </span>
        {comment}
      </span>
      <span>
        <button
          onClick={() => {
            setCommentLike(!commentLike);
          }}
        >
          {commentLike === true ? (
            <img src="images/yejee/redheart.png" className="commentLike" />
          ) : (
            <img src="images/yejee/heart.png" className="commentLike" />
          )}
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            let copy = [...postedComment];
            copy.splice(i, 1);
            setPostedComment(copy);
          }}
        >
          x
        </button>
      </span>
    </span>
  );
};

export default CommentBox;
