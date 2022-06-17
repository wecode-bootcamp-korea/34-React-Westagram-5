import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

//아래 두개 파일은 전역에 적용되야 하는 속성입니다. 그리고 이미 index.js에서 적용하고 있습니다. 불필요합니다.
// import "../../style/common.css";
// import "./Common.css"

function Login() {
  //hooks의 위치는 컴포넌트의 최 상단입니다.
  //state도 객체나 배열로 관리할 수 있습니다.
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [buttonColor, setButtonColor] = useState('#badef9');
  const navigate = useNavigate();

  //주석은 남기지 않는게 가장 좋고, 코드 자체로 표현될 수 있는게 가장 좋습니다.
  //다만 피치못하게 주석을 남겨야 하는경우에는 TODO혹은 FIXME를 활용 해 주세요 예시는 아래에 있습니다.

  // const response = 'SUCCESS';
  const handleIdInput = event => {
    // console.log('id.value: ', id);
    setId(event.target.value);
  };
  const handlePwInput = event => {
    // console.log('pw.value: ', pw);
    setPw(event.target.value);
  };

  //signUp과 signIn을 분리했다면, 각각의 통신마다 분기처리를 따로 해주시는게 좋습니다.
  //signUp은 입력한 유저정보가 서버에 잘 저장 됐다는 응답을 받을 경우와, 저장 안된 응답을 받는경우로 분기처리 하시면 됩니다.
  //signIn은 입력한 유저정보가 잘 입력이 되서 유저가 인증과 인가를 받을 경우와, 받지못하는 경우로 분기처리 하시면 됩니다.
  const signUp = () => {
    fetch('http://10.58.7.17:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };
  //TODO:나중에 지우거나 수정하고 주석 풀어야지~
  // const goToMain = () => {
  //   if (response === 'SUCCESS') {
  //     alert('환영합니다!');
  //     navigate('/main-jaehyuk');
  //   } else {
  //     alert('틀렸습니다.');
  //   }
  // };
  const signIn = () => {
    fetch('http://10.58.7.17:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS')
          window.localStorage.setItem('token', response.access_token);
      });
    //fetch는 review/sangwon PR의 코드를 확인 해 주세요
  };

  const changeButtonColor = event => {
    return id.length >= 6 && pw.length >= 6
      ? setButtonColor('blue')
      : setButtonColor('#badef9');
  };

  //FIXME: 나중에 고치고 주석 풀어야지~
  // id.includes('@') && pw.length > 5
  //   ? setButtonColor('blue')
  //   : setButtonColor('red');

  return (
    <div className="login">
      <section className="loginWrapper">
        <div className="logoWrapper">
          <Link to="/main">
            <h1 id="logo">Westagram</h1>
          </Link>
        </div>
        <form className="loginMethod">
          <div className="inputWrap">
            <input
              type="text"
              id="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
              onKeyUp={changeButtonColor}
            />
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
              onKeyUp={changeButtonColor}
            />
          </div>
          <span>
            <button
              className="loginBtn"
              type="button"
              onClick={signIn}
              //inline Style은 쓸 수 있지만, 스타일 적용 우선순위가 높기때문에 최후의 수단으로 써 주세요.
              style={{ backgroundColor: buttonColor }}
            >
              로그인
            </button>
            <button
              className="signupBtn"
              type="button"
              onClick={signUp}
              style={{ backgroundColor: buttonColor }}
            >
              회원가입
            </button>
          </span>
        </form>
        <div className="passwordWrong">
          <p>
            {/* 위쪽에서는 <Link> 를 쓰셨는데, 여기는 a 태그네요. 둘의 차이점을 한번 더 찾아보시고 어떤걸 써야 할 까 고민 해 보시기 바랍니다 */}
            <a>비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
