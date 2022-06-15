import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
// import "../../style/common.css";
// import "./Common.css"

function Login() {
  const navigate = useNavigate();
  // const response = 'SUCCESS';
  const [id, setId] = useState('');
  const handleIdInput = event => {
    // console.log('id.value: ', id);
    setId(event.target.value);
  };
  const [pw, setPw] = useState('');
  const handlePwInput = event => {
    // console.log('pw.value: ', pw);
    setPw(event.target.value);
  };
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
  };

  const [buttonColor, setButtonColor] = useState('#badef9');
  const changeButtonColor = event => {
    return id.length >= 6 && pw.length >= 6
      ? setButtonColor('blue')
      : setButtonColor('#badef9');
  };
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
            <a>비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
