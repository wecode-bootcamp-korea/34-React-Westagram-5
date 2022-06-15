import React from 'react';
import CommentList from './CommentList';
import UserCommentBox from './UserCommentBox';
function CommentBox({ commentData, commentBox, onRemove }) {
  return (
    <>
      <div className="commentBox">
        {commentData.map(comment => {
          return (
            <UserCommentBox
              userName={comment.userName}
              userComment={comment.userComment}
              index={comment.id}
              key={comment.id}
            />
          );
        })}
      </div>
      <div className="commentBox">
        {commentBox.map((commentArr, idx) => {
          return (
            <CommentList
              userName="JHJ"
              userComment={commentArr}
              key={idx}
              index={idx}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </>
  );
}
export default CommentBox;
