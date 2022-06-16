import { React, useState, useEffect } from 'react';
import './Main.scss';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';

export default function Main() {
  const [commentBox, setCommentBox] = useState([]);
  const [feeddata, setFeedData] = useState([]);

  useEffect(() => {
    fetch('./data/commentData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setCommentBox(data);
      });
  }, []);

  useEffect(() => {
    fetch('./data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setFeedData(data);
      });
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="body">
        <Feed
          feeddata={feeddata}
          commentBox={commentBox}
          setCommentBox={setCommentBox}
        />
        <Rightbar />
      </div>
    </div>
  );
}
