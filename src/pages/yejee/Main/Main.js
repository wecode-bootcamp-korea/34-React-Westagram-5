/* eslint-disable */

import React from 'react';
import './Main.scss';
import { useState } from 'react';
import Comment from './Comment';

function Main() {
  const [comment, setComment] = useState('');
  const [postedComment, setPostedComment] = useState(['']);

  // const [erase, setErase] = useState(ture);

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
                <img
                  src="images/yejee/profile-img.jpg"
                  className="profileimg"
                />
                <div className="nicknameAndLocation">
                  <p className="nickname">dumibell</p>
                  <p className="location">homesweethome</p>
                </div>
              </div>
              <img className="option" src="images/yejee/options.png" />
            </div>
            <img src="images/yejee/dumi.jpg" className="feed-img" />
            <div className="buttons">
              <button type="button">
                <img src="images/yejee/heart.png" className="button" />
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
              <span className="number">108명</span>이 좋아합니다
            </div>
            <div className="captionBox">
              <span className="dumibell">dumibell </span>
              <span className="caption"> 보고싶은 더미💕</span>
            </div>
            {/* 
            <Comment comment={comment} postedComment={postedComment} /> */}

            {postedComment.map(function (comment) {
              return <div className="postedComment">{comment}</div>;
            })}

            <form
              onSubmit={e => {
                e.preventDefault();
                let copy = [...postedComment];

                copy.push('kiki ' + comment);

                setPostedComment(copy);
                e.target.reset();
              }}
            >
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
        <div className="main-right">
          <div className="account">
            <img src="images/yejee/kiki.jpeg" className="profileimg" />
            <div className="nicknameAndLocation">
              <p className="nickname">kiki</p>
              <p className="location">homesweethome</p>
            </div>
          </div>
          <div className="storyBox">
            <div className="storyTopBar">
              <span className="story">스토리</span>
              <span className="ViewAll">모두 보기</span>
            </div>
          </div>
          <div className="recommendBox"></div>
          <div className="infoBox">
            <p>
              소개ㆍ도움말ㆍ홍보 센터ㆍAPIㆍ채용
              정보ㆍ개인정보처리방침ㆍ약관ㆍ위치ㆍ언어
            </p>
            <p>© 2022 INSTAGRAM FROM META</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
