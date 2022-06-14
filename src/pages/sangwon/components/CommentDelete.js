import React from 'react';

const CommentDelete = ({ goRemove }) => {
  return (
    <div>
      <button className="commentImage">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          className="commentImages"
          alt="delete"
          onClick={goRemove}
        />
      </button>
    </div>
  );
};

export default CommentDelete;
