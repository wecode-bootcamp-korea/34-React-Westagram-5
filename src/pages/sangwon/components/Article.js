import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from './Comment';
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

const Article = props => {
  return (
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
        <div className="leftButton">
          <FontAwesomeIcon className="buttons" icon={faHeart} size="xl" />
          <FontAwesomeIcon className="buttons" icon={faComment} size="xl" />
          <FontAwesomeIcon className="buttons" icon={faPaperPlane} size="xl" />
        </div>
        <FontAwesomeIcon className="buttons" icon={faBookmark} size="xl" />
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
          양꼬치 김치볶음밥 잡채밥 탕수육 짜장...{' '}
          <a href="#" className="type3">
            더 보기
          </a>
        </span>
        <Comment commentBox={props.commentBox} />
        <span className="time">42분 전</span>
      </div>

      {/* !!!!!!!!!!!!!!!!!!댓글창 */}
      <form className="commentLine" onSubmit={props.onSubmit}>
        <input
          type="text"
          name="repl"
          placeholder="댓글 달기..."
          className="comment"
          value={props.commentValue}
          onChange={props.onChange}
        />
        <input type="submit" value="게시" className="submit" />
      </form>
    </article>
  );
};

export default Article;
