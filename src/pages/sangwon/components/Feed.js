import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from './Comment';
import Member from './Member';
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import InputCommentLine from './InputCommentLine';

const Feed = ({ commentBox, setCommentBox, feeddata }) => {
  return (
    <>
      {feeddata.map((el, idx) => {
        return (
          <article className="feed" key={el.id}>
            <div className="feedBox">
              <Member
                id={el.name}
                class="profile"
                name={el.koreanName}
                image="images/sangwon/pic1.jpg"
              />
            </div>
            <img src={el.feedImg} className="feedImage" alt="feed" />
            <div className="buttonLine">
              <div className="leftButton">
                <FontAwesomeIcon className="buttons" icon={faHeart} size="xl" />
                <FontAwesomeIcon
                  className="buttons"
                  icon={faComment}
                  size="xl"
                />
                <FontAwesomeIcon
                  className="buttons"
                  icon={faPaperPlane}
                  size="xl"
                />
              </div>
              <FontAwesomeIcon
                className="buttons"
                icon={faBookmark}
                size="xl"
              />
            </div>
            <div className="heartLine">
              <img
                className="likeProfile"
                src="images/sangwon/pic1.jpg"
                alt="profile"
              />
              <span className="text">
                <b>hasang0.0</b>님 외 <b>{el.likeCount}명</b>이 좋아합니다
              </span>
            </div>
            <div className="contentLine">
              <span className="id">hasang0.0</span>
              <span>
                {el.content}
                <a href="#" className="type3">
                  ...더 보기
                </a>
              </span>
              <Comment feedNum={idx} commentBox={commentBox} />
              <span className="time">42분 전</span>
            </div>
            <InputCommentLine
              commentBox={commentBox}
              setCommentBox={setCommentBox}
              idx={idx}
            />
          </article>
        );
      })}
    </>
  );
};

export default Feed;
