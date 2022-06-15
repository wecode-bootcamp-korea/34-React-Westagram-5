/* eslint-disable */

import './Login.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');
  // const [color, setColor] = useState('rgba(0, 149, 246, 0.3)');
  const [button, setButton] = useState(true);

  const navigate = useNavigate();

  const realId = 'kiki@naver.com';
  const realPw = '12345678';

  const goToMain = () => {
    navigate('/main-yejee');
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
        if (response.message === 'SUCCESS') {
          window.localStorage.setItem('token', response.access_token);
          goToMain();
        } else {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      });
  };

  function changeButton() {
    id.includes('@') && pw.length >= 5 ? setButton(false) : setButton(true);
  }

  return (
    <div className="loginBox">
      <div className="border">
        <h1 className="logo">Westagram</h1>
        <form className="loginForm">
          <input
            placeholder="전화번호 사용자 이름 또는 이메일"
            id="id"
            className="login"
            onChange={e => {
              setId(e.target.value);
            }}
            onKeyUp={changeButton}
          />
          <input
            type="password"
            placeholder="비밀번호"
            id="password"
            className="login"
            onChange={e => {
              setPw(e.target.value);
            }}
            onKeyUp={changeButton}
          />
          <button
            type="button"
            className="loginButton"
            // style={{ backgroundColor: color }}
            disabled={button}
            onClick={signIn}
          >
            로그인
          </button>
        </form>
        <p className="forgottenPassword">비밀번호를 잊으셨나요?</p>
      </div>
      <div className="joinBox">
        <span>계정이 없으신가요?</span>
        <button onClick={signUp}>가입하기</button>
      </div>
    </div>
  );
}

export default Login;
