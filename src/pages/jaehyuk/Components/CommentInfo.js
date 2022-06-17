import React, { useState } from 'react';

const CommentInfo = ({ setDummyData, dummyData, value, commentIndex }) => {
  const [isLiked, setIsLiked] = useState(false);
  //이 state는 없어도 됩니다. src가 true false에 따라서 바뀌면 되기 때문에, 해당 attribute에 직접 삼항연산자로 값 부여할 수 있습니다.
  // const [heartSrc, setHeartSrc] = useState('images/jaehyuk/firstHeart.png');
  // const [delete,setDelete] = useState();

  const changeHeart = () => {
    setIsLiked(!isLiked);
  };

  //부모 컴포넌트에서 map으로 생성된 댓글 객체의 id랑, 선택하는 button의 id가 같으면 그 값을 제외하고 새로운 배열을 생성하는 댓글 삭제 함수를 만들 수 있습니다.
  const removeComment = targetIndex => {
    // let copy = [...commentArray];
    // copy.splice(index, 1);
    const deleteArray = dummyData.filter(value => value.id !== targetIndex);
    setDummyData(deleteArray);
  };
  // const onRemove = index => {
  //   props.setCommentArray(commentArray.filter(commentArray => commentArray.index !==index));
  // };
  return (
    // <ul className="comments">
    //   {props.commentArray.map((commentArray, index) => (
    <li className="commentsLi">
      <span>
        <span className="pointSpan userID">
          _hyyyyyk<span> </span>
        </span>
        <span>{value}</span>
      </span>
      <span>
        <img
          className="commentHeart"
          src={
            isLiked
              ? 'images/jaehyuk/heart.png'
              : 'images/jaehyuk/firstHeart.png'
          }
          alt="하트"
          onClick={changeHeart}
        />
        <button
          className="deleteButton"
          onClick={() => removeComment(commentIndex)}
        >
          x
        </button>
      </span>
    </li>
    //   ))}
    // </ul>
  );
};
export default CommentInfo;
