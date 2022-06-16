import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const CommentDelete = () => {
  return (
    <div>
      <button className="commentImage">
        <FontAwesomeIcon icon={faX} />
      </button>
    </div>
  );
};

export default CommentDelete;
