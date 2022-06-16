import { React } from 'react';
import CommentDelete from './CommentDelete';
import CommentHeart from './CommentHeart';

const Comment = ({ feedNum, commentBox }) => {
  return (
    <div className="commentSection">
      {commentBox[feedNum].map((el, idx) => {
        return (
          <div key={idx}>
            <span className="id">{el.name}</span>
            {el.comment}
            <div className="commentImage">
              <CommentHeart />
              <CommentDelete />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
