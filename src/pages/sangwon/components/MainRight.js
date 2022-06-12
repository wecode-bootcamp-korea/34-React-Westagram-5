import React from 'react';

const MainRight = () => {
  return (
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
          Instagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침
          · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어 @ 2022 INSTAGRAM
        </p>
      </div>
    </div>
  );
};

export default MainRight;
