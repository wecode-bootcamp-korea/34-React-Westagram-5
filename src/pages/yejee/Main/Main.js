/* eslint-disable */

import React from 'react';
import './Main.scss';
import { useState } from 'react';
import CommentBox from './Component/CommentBox';
import Mainright from './Component/MainRight';

function Main() {
  const [comment, setComment] = useState('');
  const [postedComment, setPostedComment] = useState([]);
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(108);

  const countlikes = () => {
    like ? setLikes(like => likes - 1) : setLikes(like => likes + 1);
  };

  const toggleLikeIcon = () => {
    setLike(!like);
    countlikes();
  };

  const subitComment = e => {
    e.preventDefault();
    let copy = [...postedComment];
    copy.push(comment);
    setPostedComment(copy);
    e.target.reset();
  };

  return (
    <div className="main">
      <nav>
        <p className="logo">Westagram</p>
        <div className="searchBox">
          <img src="images/yejee/loupe.png" className="searchGlasses" />
          <input type="text" placeholder="검색" id="searchBar" />
        </div>
        <div className="images">
          <img src="images/yejee/explore.png" className="icons" />
          <img src="images/yejee/heart.png" className="icons" />
          <img src="images/yejee/profile.png" className="icons" />
        </div>
      </nav>

      <main>
        <div className="empty" />
        <div className="feeds">
          <article className="articles">
            <div className="top-bar">
              <div className="account">
                <img src="images/yejee/profile6.jpg" className="profileimg" />
                <div className="nicknameAndLocation">
                  <p className="nickname">dumibell</p>
                  <p className="location">homesweethome</p>
                </div>
              </div>
              <img className="option" src="images/yejee/options.png" />
            </div>
            <img src="images/yejee/dumi.jpg" className="feed-img" />
            <div className="buttons">
              <button onClick={toggleLikeIcon}>
                {like === true ? (
                  <img src="images/yejee/redheart.png" className="button" />
                ) : (
                  <img src="images/yejee/heart.png" className="button" />
                )}
              </button>
              <button type="button">
                <img src="images/yejee/comment.png" className="button" />
              </button>
              <button type="button">
                <img className="button" src="images/yejee/share.png" />
              </button>
            </div>
            <div className="howManyLikes">
              <span className="who">kiki</span>님 외{' '}
              <span className="number">{likes}</span>
              명이 좋아합니다
            </div>
            <div className="captionBox">
              <span className="dumibell">dumibell </span>
              <span className="caption"> 보고싶은 더미💕</span>
            </div>

            {postedComment.map((comment, i) => {
              return (
                <CommentBox
                  key={i}
                  comment={comment}
                  setComment={setComment}
                  postedComment={postedComment}
                  setPostedComment={setPostedComment}
                />
              );
            })}

            <form onSubmit={subitComment}>
              <input
                type="text"
                placeholder="댓글 달기"
                className="comment"
                onChange={e => {
                  setComment(e.target.value);
                }}
              />
              <button className="postButton">게시</button>
            </form>
          </article>
        </div>
        <Mainright />
      </main>
    </div>
  );
  // const addComment = () => {
  //   setPostedComment = [...postedComment, comment];
  // };
}

export default Main;
