import React from 'react';

const Comment = props => {
  return (
    <div className="commentSection">
      {props.commentBox.map((el, idx) => (
        <div key={idx}>
          <span className="id">hasang0.0</span>
          {el}
        </div>
      ))}
    </div>
  );
};

export default Comment;
