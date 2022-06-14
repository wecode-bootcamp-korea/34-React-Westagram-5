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

  function changeButton() {
    id.includes('@') && pw.length >= 5 ? setButton(false) : setButton(true);
  }

  // function changeColor() {
  //   id.includes('@') && pw.length >= 5
  //     ? setColor('#0095F6')
  //     : setColor('rgba(0, 149, 246, 0.3)');
  // }

  function changeInput(e) {}

  const change = () => {
    // changeColor();
    changeButton();
  };

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
            onKeyUp={change}
          />
          <input
            type="password"
            placeholder="비밀번호"
            id="password"
            className="login"
            onChange={e => {
              setPw(e.target.value);
            }}
            onKeyUp={change}
          />
          <button
            className="loginButton"
            // style={{ backgroundColor: color }}
            disabled={button}
            onClick={e => {
              if (realId == id) {
                if (realPw == pw) {
                  e.stopPropagation();
                  goToMain();
                }
              } else {
                alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
              }
            }}
          >
            로그인
          </button>
        </form>
        <p className="forgottenPassword">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default Login;
