import { React, useState } from 'react';
import './Main.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHeart,
//   faComment,
//   faPaperPlane,
//   faBookmark,
// } from '@fortawesome/free-regular-svg-icons';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
  // const commentEnter = (e) => {
  //   if (e.key === "Enter" || e.key === "NumpadEnter") {
  //   }
  // };
  const [commentList, setCommentList] = useState('');
  const [dat, setDat] = useState('');

  const createComment = e => {
    e.preventDefault();
    const repl = e.target.repl.value;
    setDat(e.target.repl.value);
    console.log(dat);
  };

  // const cm = () => {
  //   return <div>{repl}</div>;
  // };

  return (
    <div className="main">
      <nav className="navbar">
        <div className="navElement">
          <img
            src="images/sangwon/instagram.png"
            className="imagess"
            alt="insta"
          />
          <span id="instaId" className="mainTitle">
            westagram
          </span>
        </div>
        <div className="navElement">
          {/* <FontAwesomeIcon className="search" icon={faMagnifyingGlass} /> */}
          <input className="inputbox" type="text" placeholder="검색" />
        </div>
        <div className="navElement">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            className="imagess"
            alt="compass"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            className="imagess"
            alt="heart"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            className="imagess"
            alt="myinfo"
          />
        </div>
      </nav>
      <div className="feeds">
        <article>
          <div className="feedBox">
            <div className="boxLine">
              <img
                className="profile"
                src="images/sangwon/pic1.jpg"
                alt="profile"
              />
              <div className="textLine">
                <span className="text">id</span>
                <span className="text">small</span>
              </div>
            </div>
          </div>
          <img src="images/sangwon/food.jpg" className="feedImage" alt="feed" />
          <div className="buttonLine">
            {/* <FontAwesomeIcon className="buttons" icon={faHeart} size="2x" />
            <FontAwesomeIcon className="buttons" icon={faComment} size="2x" />
            <FontAwesomeIcon
              className="buttons"
              icon={faPaperPlane}
              size="2x"
            />
            <FontAwesomeIcon
              className="buttons type4"
              icon={faBookmark}
              size="2x"
            /> */}
          </div>
          <div className="heartLine">
            <span></span>
            <img
              className="likeProfile"
              src="images/sangwon/pic1.jpg"
              alt="profile"
            />
            <span className="text">
              <b>hasang0.0</b>님 외 <b>200000억명</b>이 좋아합니다
            </span>
          </div>
          <div className="contentLine">
            <span className="id">hasang0.0</span>
            <span>
              냉면 돈까스 삼겹살 참치김밥 버거킹 회전초밥 불닭볶음면 막창 대창
              양꼬치 김치볶음밥 잡채밥 탕수육 짜장면...{' '}
              <a href="#" className="type3">
                더 보기
              </a>
            </span>
            <div className="commentSection">{commentList}</div>
            <span className="time">42분 전</span>
          </div>
          <form className="commentLine" onSubmit={createComment}>
            <input
              type="text"
              name="repl"
              placeholder="댓글 달기..."
              className="comment"
            />
            <input type="submit" value="게시" className="submit" />
          </form>
        </article>

        <div className="main-right">
          <div className="feedBox">
            <div className="boxLine">
              <img className="myProfile" src="images/sangwon/mypic.jpeg" />
              <div className="textLine">
                <span className="myText">
                  <b>hasang0.0</b>
                </span>
                <span className="myText">하상원</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="addLine">
              <span className="text type1">스토리</span>
              <a className="seeAll">
                <span className="text">모두보기</span>
              </a>
            </div>
            <div className="boxLine">
              <img className="profile" src="images/sangwon/pic1.jpg" />
              <div className="textLine">
                <span className="text">id</span>
                <span className="text">small</span>
              </div>
            </div>

            <div className="boxLine">
              <img className="profile" src="images/sangwon/pic1.jpg" />
              <div className="textLine">
                <span className="text">id</span>
                <span className="text">small</span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="addLine">
              <span className="text type1">회원님을 위한 추천</span>
              <a className="seeAll">
                <span className="text">모두보기</span>
              </a>
            </div>

            <div className="boxLine">
              <img className="profile" src="images/sangwon/pic1.jpg" />
              <div className="followBox">
                <div className="textLine">
                  <span className="text">id</span>
                  <span className="text link">small</span>
                </div>
                <a href="#" className="link type2">
                  팔로우
                </a>
              </div>
            </div>
            <div className="boxLine">
              <img className="profile" src="images/sangwon/pic1.jpg" />
              <div className="followBox">
                <div className="textLine">
                  <span className="text">id</span>
                  <span className="text">small</span>
                </div>
                <a href="#" className="link type2">
                  팔로우
                </a>
              </div>
            </div>
          </div>
          <div className="addBox">
            <p className="type3">
              Instagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 ·
              개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어 @
              2022 INSTAGRAM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
