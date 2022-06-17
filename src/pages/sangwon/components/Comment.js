import { React } from 'react';
import CommentDelete from './CommentDelete';
import CommentHeart from './CommentHeart';

const Comment = ({ feedNum, commentBox, goRemove }) => {
  return (
    <div className="commentSection">
      {commentBox[feedNum].map((el, idx) => {
        return (
          <div key={idx}>
            <span className="id">{el.name}</span>
            {el.comment}

            <div className="commentImage">
              <CommentHeart />
              <CommentDelete idx={idx} goRemove={goRemove} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
