import React, { useState } from 'react';
import CommentBox from './Component/CommentBox';
import MainRight from './Component/MainRight';
import './Main.scss';

const INFO_IMG = [
  { id: 1, src: 'images/yejee/explore.png', className: 'icons' },
  { id: 2, src: 'images/yejee/heart.png', className: 'icons' },
  { id: 3, src: 'images/yejee/profile.png', className: 'icons' },
];

function Main() {
  const [comment, setComment] = useState('');
  const [postedComment, setPostedComment] = useState([]);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(108);

  const countlikes = () => {
    like ? setLikeCount(prev => prev - 1) : setLikeCount(prev => prev + 1);
  };

  const toggleLikeIcon = () => {
    setLike(!like);
    countlikes();
  };

  const getComment = e => {
    setComment(e.target.value);
  };

  const submitComment = e => {
    e.preventDefault();
    if (comment.length === 0) return;
    setPostedComment([...postedComment, comment]);
    setComment('');
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
          {INFO_IMG.map(imgData => {
            return (
              <img
                key={imgData.id}
                src={imgData.src}
                className={imgData.className}
                alt="이미지에 alt 속성은 꼭 넣어 주세요~"
              />
            );
          })}
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
                <img
                  src={
                    like
                      ? 'images/yejee/redheart.png'
                      : 'images/yejee/heart.png'
                  }
                  className="button"
                  alt="노란색 밑줄이 있는 코드에 마우스커서 올려보면 어떤 수정이 필요한지 알려줍니다~ warning message를 차근차근 읽어보세요~"
                />
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
              <span className="number">{likeCount}</span>
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
                  commentIndex={i}
                  comment={comment}
                  setComment={setComment}
                  postedComment={postedComment}
                  setPostedComment={setPostedComment}
                />
              );
            })}

            <form onSubmit={submitComment}>
              <input
                type="text"
                placeholder="댓글 달기"
                className="comment"
                value={comment}
                onChange={getComment}
              />
              <button className="postButton">게시</button>
            </form>
          </article>
        </div>
        <MainRight />
      </main>
    </div>
  );
  //TODO : 리팩토링 할 떄 수정 하기~
  // const addComment = () => {
  //   setPostedComment = [...postedComment, comment];
  // };
}

export default Main;
