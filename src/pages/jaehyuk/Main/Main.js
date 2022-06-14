import './Main.scss';
import '../../../styles/common.scss';
import CommentInfo from '../Components/CommentInfo';
import React, { useState } from 'react';
// import { eventWrapper } from '@testing-library/user-event/dist/utils';
// import { createPortal } from 'react-dom';

function Main() {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  // const [key, setKey] = useState(0);
  const commentValue = event => {
    setComment(event.target.value);
    // console.log(comment);
    // console.log(event);
  };

  const writeComments = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray([...commentArray, comment]);
    setComment('');
  };
  return (
    <>
      <nav className="navigation">
        <div className="navContainer">
          <div className="nav1 navCommon">
            <img
              className="logoInstagramTxt"
              src="images/jaehyuk/instagram.png"
              alt="instagram_logo"
            />
          </div>
          <input
            id="searchInput"
            type="search"
            className="inputSearch"
            placeholder="검색"
          />
          <div className="nav2 navCommon">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="탐색"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="하트"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="마이페이지"
            />
          </div>
        </div>
      </nav>
      <main>
        <div className="feeds">
          <article className="articleBordering">
            <header>
              <div className="profileOfArticle">
                <img
                  className="imgProfile pic"
                  src="images/jaehyuk/신세경_프로필.jpg"
                  alt="sjkuksee님의 프로필 사진"
                />
                <span className="userID mainId pointSpan">sjkuksee</span>
              </div>
              <img
                className="iconReact iconMore"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                alt="more"
              />
            </header>
            <div className="mainImage">
              <img
                src="images/jaehyuk/신세경_프로필.jpg"
                alt="sjkuksee님의 피드 사진"
                className="mainPic"
              />
            </div>
            <div className="iconsReact">
              <div className="iconsLeft">
                <img
                  id="mainHeart"
                  className="iconReact"
                  src="images/jaehyuk/firstHeart.png"
                  alt="하트"
                />
                <img
                  id="mainBallon"
                  className="iconReact"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  alt="말풍선"
                />
                <img
                  id="dmIcon"
                  className="iconReact"
                  src="images/jaehyuk/dm.png"
                  alt="DM"
                />
              </div>
              <img
                id="bookMark"
                className="iconReact"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                alt="북마크"
              />
            </div>
            <div className="reaction">
              <div className="likedPeople">
                <img
                  className="pic"
                  src="images/jaehyuk/신세경_프로필.jpg"
                  alt="sjkuksee님의 프로필 사진"
                />
                <p>
                  <span className="pointSpan">_hyyyyyk</span>님{' '}
                  <span className="pointSpan" />
                  외 258,157,153 명 <span id="likeNumber" />이 좋아합니다
                </p>
              </div>
              <div className="description">
                <p>
                  <span className="pointSpan userID">sjkuksee</span>
                  <span className="atTag">@dr.forhair_official @unove</span> 🌱
                </p>
              </div>
              <div className="commentSection">
                <ul className="comments">
                  {commentArray.map((value, index) => (
                    <CommentInfo
                      key={value.id}
                      index={index}
                      value={value}
                      commentArray={commentArray}
                      setCommentArray={setCommentArray}
                    />
                  ))}
                </ul>
                <div className="timeLog">
                  <span className="timeLogSpan">50분 전</span>
                </div>
              </div>
            </div>
            <div className="hl" />
            <form className="comment">
              <input
                id="inputComment"
                className="inputComment"
                type="text"
                placeholder="댓글 달기..."
                onChange={commentValue}
                value={comment}
                // onKeyPress={onKeyPress}
              />
              <button
                type="submit"
                className="submitComment"
                // disabled="false"
                onClick={writeComments}
              >
                게시
              </button>
            </form>
          </article>
        </div>
        <div className="mainRight">
          <div className="myProfile">
            <img
              className="pic"
              src="images/jaehyuk/me.jpg"
              alt="_hyyyyyk님의 프로필 사진"
            />
            <div className="myProfileDiv">
              <span className="userID pointSpan">_hyyyyyk</span>
              <span className="subSpan">JAE HYUK CHOI</span>
            </div>
          </div>
          <div className="sectionStory articleBordering">
            <div className="menuTitle">
              <span className="subTitle">스토리</span>
              <span className="findMore">모두 보기</span>
            </div>
            <ul className="storyList">
              <li className="storyListLi">
                <div className="gradientWrap">
                  <img
                    className="imgProfile story"
                    src="images/jaehyuk/wecode.jpg"
                    alt="wecode_bootcamp님의 프로필 사진"
                  />
                </div>
                <div className="profileText">
                  <span className="userID pointSpan">wecode_bootcamp</span>
                  <span className="subSpan">12분 전</span>
                </div>
              </li>
              <li className="storyListLi">
                <div className="gradientwrap">
                  <img
                    className="imgProfile story"
                    src="images/jaehyuk/신세경_프로필.jpg"
                    alt="han_ye_seul님의 프로필 사진"
                  />
                </div>
                <div className="profileText">
                  <span className="userID pointSpan">han_ye_seul</span>
                  <span className="subSpan">28분 전</span>
                </div>
              </li>
              <li className="storyListLi">
                <div className="gradientWrap">
                  <img
                    className="imgProfile story"
                    src="image/신세경_프로필.jpg"
                    alt="dntlrdl님의 프로필 사진"
                  />
                </div>
                <div className="profileText">
                  <span className="userID pointSpan">dntlrdl</span>
                  <span className="subSpan">40분 전</span>
                </div>
              </li>
              <li className="storyListLi">
                <div className="gradientWrap">
                  <img
                    className="imgProfile story"
                    src="images/jaehyuk/신세경_프로필.jpg"
                    alt="i_icaruswalks님의 프로필 사진"
                  />
                </div>
                <div className="profileText">
                  <span className="userID pointSpan">i_icaruswalks</span>
                  <span className="subSpan">56분 전</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="sectionRecommend articleBordering">
            <div className="menuTitle">
              <span className="subTitle">회원님을 위한 추천</span>
              <span className="findMore">모두 보기</span>
            </div>
            <ul className="recommendList">
              <li className="recommendListLi">
                <div className="recommendFriendProfile">
                  <img
                    className="imgProfile"
                    src="images/jaehyuk/신세경_프로필.jpg"
                    alt="renebaebae님의 프로필 사진"
                  />
                  <div className="profileText">
                    <span className="userID pointSpan">renebaebae</span>
                    <span className="subSpan">
                      hi_sseulgi님 외 2명이 팔로우합니다
                    </span>
                  </div>
                </div>
                <span className="btnFollow">팔로우</span>
              </li>
              <li className="recommendListLi">
                <div className="recommendFriendProfile">
                  <img
                    className="imgProfile"
                    src="images/jaehyuk/신세경_프로필.jpg"
                    alt="신세경 이미지"
                  />
                  <div className="profileText">
                    <span className="userID pointSpan">_jeongjaehyun</span>
                    <span className="subSpan">_hyyyyyk님이 팔로우합니다</span>
                  </div>
                </div>
                <span className="btnFollow">팔로우</span>
              </li>
              <li className="recommendListLi">
                <div className="recommendFriendProfile">
                  <img
                    className="imgProfile"
                    src="images/jaehyuk/me.jpg"
                    alt="leehi_hi님의 프로필 사진"
                  />
                  <div className="profileText">
                    <span className="userID pointSpan">leehi_hi</span>
                    <span className="subSpan">
                      dwdqaadf님 외 5명이 팔로우합...
                    </span>
                  </div>
                </div>
                <span className="btnFollow">팔로우</span>
              </li>
            </ul>
          </div>
          <footer className="footer">
            <p className="instaScript">
              소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ 개인정보처리방침 ∙{' '}
              <br />
              약관 ∙ 위치 ∙ 언어
              <br />
              <br />© 2022 INSTAGRAM FROM META
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}

export default Main;
