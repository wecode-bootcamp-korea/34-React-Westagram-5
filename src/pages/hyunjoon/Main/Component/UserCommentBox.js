import React from 'react';

function UserCommentBox({ userName, userComment }) {
  return (
    <p>
      <strong>{userName}</strong>
      {userComment}
    </p>
  );
}
export default UserCommentBox;
