import { React, useState } from 'react';
import './Main.scss';
import Navbar from '../components/Navbar';
import Article from '../components/Article';
import MainRight from '../components/MainRight';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHeart,
//   faComment,
//   faPaperPlane,
//   faBookmark,
// } from '@fortawesome/free-regular-svg-icons';

export default function Main() {
  const [commentValue, setCommentValue] = useState('');
  const [commentBox, setCommentBox] = useState(['hihihihi']);

  const onChange = e => setCommentValue(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    commentBox.push(commentValue);
    setCommentValue('');
    console.log(commentBox);
  };

  return (
    <div className="main">
      <Navbar />
      <div className="feeds">
        <Article
          commentBox={commentBox}
          commentValue={commentValue}
          onSubmit={onSubmit}
          onChange={onChange}
        />
        <MainRight />
      </div>
    </div>
  );
}
