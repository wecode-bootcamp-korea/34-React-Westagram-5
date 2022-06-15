import React, { useState } from 'react';
// import 'CommentInfo.scss';

const CommentInfo = ({ setCommentArray, commentArray, value, index }) => {
  const [like, setLike] = useState(false);
  const [heartSrc, setHeartSrc] = useState('images/jaehyuk/firstHeart.png');
  // const [delete,setDelete] = useState();
  const changeHeart = event => {
    console.log(like);
    if (!like) {
      setHeartSrc('images/jaehyuk/firstHeart.png');
      setLike(true);
    } else if (like) {
      setHeartSrc('images/jaehyuk/heart.png');
      setLike(false);
    }
  };
  // const onRemove = index => {

  // };
  // const onRemove = index => {
  //   props.setCommentArray(commentArray.filter(commentArray => commentArray.index !==index));
  // };
  return (
    // <ul className="comments">
    //   {props.commentArray.map((commentArray, index) => (
    <li key={value.id} className="commentsLi">
      <span>
        <span className="pointSpan userID">
          _hyyyyyk<span> </span>
        </span>
        <span>{value}</span>
      </span>
      <span>
        <img
          className="commentHeart"
          src={heartSrc}
          alt="하트"
          onClick={changeHeart}
        />
        <button
          className="deleteButton"
          onClick={index => {
            // let copy = [...commentArray];
            // copy.splice(index, 1);
            const deleteArray = commentArray.filter(value => {
              return value.id !== index;
            });
            console.log(commentArray.value.id);
            setCommentArray(deleteArray);
          }}
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
