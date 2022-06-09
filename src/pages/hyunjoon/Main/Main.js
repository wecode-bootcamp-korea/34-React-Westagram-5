import './Main.scss';
function Main() {
  return (
    <div className="main">
      <nav>
        <div className="navLeft">
          <img
            alt="LogoIcon"
            className="icon"
            id="navLogoImg;"
            src="images/hyunjoon/instagram-logo.png"
          />
          <p className="text">westagram</p>
        </div>
        <div className="search">
          <input className="searchInput" type="text" placeholder="검색" />
          <img
            alt="SerchImg"
            id="searchImg"
            src="images/hyunjoon/search-interface-symbol.png"
          />
        </div>
        <div className="navRight">
          <img
            alt="CompassImg"
            className="icon"
            id="navCompassImg"
            src="images/hyunjoon/explore.png"
          />
          <img
            alt="HeartImg"
            className="icon"
            id="navHeartImg"
            src="images/hyunjoon/heart.png"
          />
          <img
            alt="ManImg"
            className="icon"
            id="navManImg"
            src="images/hyunjoon/user.png"
          />
        </div>
      </nav>
      <section>
        <div className="content">
          <div className="contentBox">
            <div className="userContent">
              <div className="userName">username</div>
              <img
                alt="UserImg"
                id="itsMeImg"
                src="images/hyunjoon/JungHyunJun.jpeg"
              />
              <img alt="MoreImg" id="more" src="images/hyunjoon/more.png" />
            </div>
            <img alt="Cake" id="cake" src="images/hyunjoon/cake.jpg" />

            <div className="commentContent">
              <div className="likeContent">
                <div className="likeLeft">
                  <img
                    className="likeContentIcon"
                    alt="LikeImg"
                    src="images/hyunjoon/like.png"
                  />
                  <img
                    className="likeContentIcon"
                    alt="SpeechBubleImg"
                    src="images/hyunjoon/speech-bubble.png"
                  />
                  <img
                    className="likeContentIcon"
                    alt="uploadImg"
                    src="images/hyunjoon/upload.png"
                  />
                </div>
                <div className="likeRight">
                  <img
                    className="likeContentIcon"
                    alt="TagImg"
                    src="images/hyunjoon/tag.png"
                  />
                </div>
              </div>
              <p className="howManyLike">
                <img alt="FriendImg" src="images/hyunjoon/recommand2.jpg" />
                <strong>friend1</strong>님 <strong>외 10명</strong>이
                좋아합니다.
              </p>
              <div id="commentBox">
                <p>
                  <strong>username</strong> JMT
                </p>
              </div>
              <div className="commentInputBox">
                <input
                  className="commentInput"
                  type="text"
                  placeholder="댓글 달기.."
                />
                <button className="postingButton">게시</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="nameBundleBox">
            <img
              alt="WecodeLogo"
              className="wecodeImg"
              src="images/hyunjoon/wecode.png"
            />
            <div className="nameBundle">
              <p>wecode_bootcamp</p>
              <span>wecode|위코드</span>
            </div>
          </div>
          <div className="storyBox">
            <div className="sideBarNav">
              <span>스토리</span>
              <strong>
                <span className="textRightSide">모두 보기</span>
              </strong>
            </div>
            <div className="nameBundleBox">
              <img
                alt="FriendImg"
                className="smallImg"
                src="images/hyunjoon/story1.jpg"
              />
              <div className="nameBundle">
                <p>story1</p>
                <span>num시간,분 전</span>
              </div>
            </div>
            <div className="nameBundleBox">
              <img
                alt="FriendImg"
                className="smallImg"
                src="images/hyunjoon/story2.jpg"
              />
              <div className="nameBundle">
                <p>story2</p>
                <span>num시간,분 전</span>
              </div>
            </div>
            <div className="nameBundleBox">
              <img
                alt="FriendImg"
                className="smallImg"
                src="images/hyunjoon/story3.jpg"
              />
              <div className="nameBundle">
                <p>story3</p>
                <span>num시간,분 전</span>
              </div>
            </div>
          </div>
          <div className="recommendBox">
            <div className="sideBarNav">
              <span>회원님을 위한 추천</span>
              <strong>
                <span className="textRightSide">모두 보기</span>
              </strong>
            </div>
            <div className="needFollow">
              <div className="nameBundleBox">
                <img
                  alt="FriendImg"
                  className="smallImg"
                  src="images/hyunjoon/story4.jpg"
                />
                <div className="nameBundle">
                  <p>recommend1</p>
                  <span>num시간,분 전</span>
                </div>
              </div>
              <span className="textRightSide">팔로우</span>
            </div>
            <div className="needFollow">
              <div className="nameBundleBox">
                <img
                  alt="FriendImg"
                  className="smallImg"
                  src="images/hyunjoon/recommand2.jpg"
                />
                <div className="nameBundle">
                  <p>recommend2</p>
                  <span>num시간,분 전</span>
                </div>
              </div>
              <span className="textRightSide">팔로우</span>
            </div>
            <div className="needFollow">
              <div className="nameBundleBox">
                <img
                  alt="FriendImg"
                  className="smallImg"
                  src="images/hyunjoon/recommand3.jpg"
                />
                <div className="nameBundle">
                  <p>recommend3</p>
                  <span>num시간,분 전</span>
                </div>
              </div>
              <span className="followText">팔로우</span>
            </div>
          </div>
          <div className="source">
            <p>westargram 정보 지원 홍보 센터 API</p>
            <p>채용 정보 개인정보처리방침 약관</p>
            <p>디렉터리 프로필 해시태그 언어</p>
            <div>2022 WESTAGRAM</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
