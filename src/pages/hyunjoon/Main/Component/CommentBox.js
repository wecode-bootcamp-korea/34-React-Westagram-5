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
        {/* 백엔드 데이터 기반으로 개발하게 될 텐데, index를 key props로 사용하는 일은 없습니다만, 
        key props는 index로 쓰여서도 안됩니다. 만약 아무것도 수정될 일이 없다는게 확실하다면 쓸 순있지만, 그런일은 흔하지않습니다 */}
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
