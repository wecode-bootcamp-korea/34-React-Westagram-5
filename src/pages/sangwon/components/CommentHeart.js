import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidfaHeart } from '@fortawesome/free-solid-svg-icons';

const CommentHeart = () => {
  const [heartClass, setHeartClass] = useState('commentImages');
  const [like, setLike] = useState(false);
  const handleHeart = () => {
    like ? setLike(false) : setLike(true);
  };
  const handleHeartClass = () => {
    heartClass === 'commentImages'
      ? setHeartClass('commentImages2')
      : setHeartClass('commentImages');
  };

  return (
    <FontAwesomeIcon
      className={heartClass}
      icon={like ? faSolidfaHeart : faHeart}
      onClick={() => {
        handleHeart();
        handleHeartClass();
      }}
    />
  );
};

export default CommentHeart;
