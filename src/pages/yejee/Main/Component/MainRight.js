import React from 'react';
import Story from './Story';

const MainRight = () => {
  return (
    <div className="main-right">
      <div className="account">
        <img
          src="images/yejee/kiki.jpeg"
          className="profileimg"
          alt="alt속성 넣어주세요~"
        />
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
        {STORY_DATA.map(storyData => (
          <Story
            key={storyData.id}
            userName={storyData.userName}
            bottomText={storyData.uploadedTimeStamp}
          >
            <img src={storyData.src} alt="" />
          </Story>
        ))}
      </div>
      <div className="box" style={{ height: 200 }}>
        <div className="topBar">
          <span className="boxTitle">회원님을 위한 추천</span>
          <span className="ViewAll">모두 보기</span>
        </div>
        //TODO:리팩토링할 떄 map 으로 구현 해 보기~
        <Story
          img={<img src="./images/yejee/cupcake.jpg" />}
          id="soooojeong"
          bottomText="_legend_님 외 3명이 팔로우..."
        />
        <Story
          img={<img src="./images/yejee/profile4.jpg" />}
          id="loveydovey"
          bottomText="adorable_suyeon님 외 19명..."
        />
        <Story
          img={<img src="./images/yejee/profile5.jpg" />}
          id="_yejee14_"
          bottomText="wisdom_hye님 외 3명이 팔로..."
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
  );
};

export default MainRight;

const STORY_DATA = [
  {
    id: 1,
    src: './images/yejee/bell.jpg',
    userName: 'coding_cheonjae',
    uploadedTimeStamp: '16분 전',
    alt: '이건 꼭 들어가야 합니다',
  },
  {
    id: 2,
    src: './images/yejee/profile1.jpg',
    userName: 'drink_soju',
    uploadedTimeStamp: '2시간 전',
    alt: '이건 꼭 들어가야 합니다',
  },
  {
    id: 3,
    src: './images/yejee/profile2.jpg',
    userName: 'jiyeonyyy',
    uploadedTimeStamp: '8시간 전',
    alt: '이건 꼭 들어가야 합니다',
  },
  {
    id: 4,
    src: './images/yejee/profile3.jpg',
    userName: 'lovely_sy',
    uploadedTimeStamp: '15시간 전',
    alt: '이건 꼭 들어가야 합니다',
  },
];
