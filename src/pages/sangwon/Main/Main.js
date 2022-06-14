import { React, useState } from 'react';
import './Main.scss';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHeart,
//   faComment,
//   faPaperPlane,
//   faBookmark,
// } from '@fortawesome/free-regular-svg-icons';

export default function Main() {
  const [num, setNum] = useState(0);
  const [commentValue, setCommentValue] = useState('');
  const [commentBox, setCommentBox] = useState([
    { id: 'niceman', comment: 'nice' },
    { id: 'goodgirl', comment: 'good' },
    { id: 'greatboss', comment: 'great' },
    { id: 'verywoman', comment: 'verynice' },
  ]);

  const onChange = e => {
    setCommentValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setCommentBox(value => [
      ...value,
      { id: 'hasang0.0', comment: commentValue },
    ]);
    setCommentValue('');
    setNum(num + 1);
  };

  const goRemove = id => {
    setCommentBox(commentBox.filter(val => val.id !== id));
  };

  return (
    <div className="main">
      <Navbar />
      <div className="body">
        {/* {commentBox} */}
        <Feed
          commentBox={commentBox}
          commentValue={commentValue}
          onSubmit={onSubmit}
          onChange={onChange}
          goRemove={goRemove}
        />
        <Rightbar />
      </div>
    </div>
  );
}
