import { React } from 'react';
import CommentDelete from './CommentDelete';
import CommentHeart from './CommentHeart';

const Comment = ({ commentBox, goRemove }) => {
  return (
    <div className="commentSection">
      {commentBox.map((el, idx) => {
        return (
          <div key={idx}>
            <span className="id">{el.id}</span>
            {el.comment}

            <div className="commentImage">
              <CommentHeart />
              {/* <CommentDelete idx={idx} goRemove={goRemove} /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
