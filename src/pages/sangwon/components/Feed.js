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

const Feed = ({
  commentBox,
  commentValue,
  onChange,
  onSubmit,
  goRemove,
  feeddata,
}) => {
  return (
    <>
      {feeddata.map((el, idx) => {
        return (
          <article className="feed">
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
                <a href="/main-sangwon" className="type3">
                  ...더 보기
                </a>
              </span>
              <Comment
                feedNum={idx}
                commentBox={commentBox}
                goRemove={goRemove}
              />
              <span className="time">42분 전</span>
            </div>

            <form className="commentLine" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="댓글 달기..."
                className="comment"
                value={commentValue}
                onChange={onChange}
              />
              <input type="submit" value="게시" className="submit" />
            </form>
          </article>
        );
      })}
    </>
  );
};

export default Feed;

// {commentBox.map((el, idx) => {
//   return (
//     <div key={idx}>
//       <span className="id">{el.id}</span>
//       {el.comment}

//       <div className="commentImage">
//         <CommentHeart />
//         <CommentDelete idx={idx} goRemove={goRemove} />
//       </div>
//     </div>
//   );
// })}
// return (
//   <article className="feed">
//     <div className="feedBox">
//       <Member
//         id="id0"
//         class="profile"
//         name="사람0"
//         image="images/sangwon/pic1.jpg"
//       />
//     </div>
//     <img src="images/sangwon/food.jpg" className="feedImage" alt="feed" />
//     <div className="buttonLine">
//       <div className="leftButton">
//         <FontAwesomeIcon className="buttons" icon={faHeart} size="xl" />
//         <FontAwesomeIcon className="buttons" icon={faComment} size="xl" />
//         <FontAwesomeIcon className="buttons" icon={faPaperPlane} size="xl" />
//       </div>
//       <FontAwesomeIcon className="buttons" icon={faBookmark} size="xl" />
//     </div>
//     <div className="heartLine">
//       <img
//         className="likeProfile"
//         src="images/sangwon/pic1.jpg"
//         alt="profile"
//       />
//       <span className="text">
//         <b>hasang0.0</b>님 외 <b>200000억명</b>이 좋아합니다
//       </span>
//     </div>
//     <div className="contentLine">
//       <span className="id">hasang0.0</span>
//       <span>
//         냉면 돈까스 삼겹살 참치김밥 버거킹 회전초밥 불닭볶음면 막창 대창
//         양꼬치 김치볶음밥 잡채밥 탕수육 짜장...{' '}
//         <a href="/main-sangwon" className="type3">
//           더 보기
//         </a>
//       </span>
//       <Comment commentBox={commentBox} goRemove={goRemove} />
//       <span className="time">42분 전</span>
//     </div>

//     <form className="commentLine" onSubmit={onSubmit}>
//       <input
//         type="text"
//         placeholder="댓글 달기..."
//         className="comment"
//         value={commentValue}
//         onChange={onChange}
//       />
//       <input type="submit" value="게시" className="submit" />
//     </form>
//   </article>
//   </>
// );
// }
