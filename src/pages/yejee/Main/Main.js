/* eslint-disable */

import React from 'react';
import './Main.scss';
import { useState } from 'react';
import CommentBox from './Component/CommentBox';
import Story from './Component/Story';

function Main() {
  const [comment, setComment] = useState('');
  const [postedComment, setPostedComment] = useState([]);
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(108);

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
              <button
                onClick={() => {
                  setLike(!like);
                  setLikes(likes + 1);
                }}
              >
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
                  comment={comment}
                  setComment={setComment}
                  postedComment={postedComment}
                  setPostedComment={setPostedComment}
                />
              );
            })}

            <form
              onSubmit={e => {
                e.preventDefault();
                let copy = [...postedComment];
                copy.push(comment);
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
          <div className="box">
            <div className="topBar">
              <span className="boxTitle">스토리</span>
              <span className="ViewAll">모두 보기</span>
            </div>
            <Story
              img={<img src="./images/yejee/bell.jpg" />}
              id={'coding_cheonjae'}
              bottomText={'16분 전'}
            />
            <Story
              img={<img src="./images/yejee/profile1.jpg" />}
              id={'drink_soju'}
              bottomText={'2시간 전'}
            />
            <Story
              img={<img src="./images/yejee/profile2.jpg" />}
              id={'jiyeonyyy'}
              bottomText={'8시간 전'}
            />
            <Story
              img={<img src="./images/yejee/profile3.jpg" />}
              id={'lovely_sy'}
              bottomText={'15시간 전'}
            />
          </div>
          <div className="box" style={{ height: 200 }}>
            <div className="topBar">
              <span className="boxTitle">회원님을 위한 추천</span>
              <span className="ViewAll">모두 보기</span>
            </div>
            <Story
              img={<img src="./images/yejee/cupcake.jpg" />}
              id={'soooojeong'}
              bottomText={'_legend_님 외 3명이 팔로우...'}
            />
            <Story
              img={<img src="./images/yejee/profile4.jpg" />}
              id={'loveydovey'}
              bottomText={'adorable_suyeon님 외 19명...'}
            />
            <Story
              img={<img src="./images/yejee/profile5.jpg" />}
              id={'_yejee14_'}
              bottomText={'wisdom_hye님 외 3명이 팔로...'}
            />
          </div>

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
  // const addComment = () => {
  //   setPostedComment = [...postedComment, comment];
  // };
}

export default Main;
