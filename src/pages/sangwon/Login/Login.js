import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const ERROR_MESSAGE = {
  'KEY ERROR': 'key 확인',
  'INVALID EMAIL': '이메일이나 비밀번호를 확인 해 주세요',
  'INVALID PASSWORD': '이메일이나 비밀번호를 확인 해 주세요',
};

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });

  const { userId, userPw } = userInfo;
  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.0.27:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신 실패');
      })
      .then(data => {
        if (data.message === 'SUCCESS') {
          localStorage.setItem('Key', data.access_token);
        } else {
          alert(ERROR_MESSAGE[data.message]);
        }
      })
      .catch(err => console.log(err));
    navigate('/main-sangwon');
  };

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const isValid = userId.includes('@') && userPw.length >= 5;

  return (
    <div className="login">
      <div className="loginWrapper">
        <span className="loginTitle">westagram</span>
        <form className="loginInputBox" onSubmit={goToMain}>
          <input
            type="text"
            className="idBox"
            name="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={getUserInfo}
          />
          <input
            type="password"
            className="pwBox"
            name="userPw"
            placeholder="비밀번호"
            onChange={getUserInfo}
          />
          <input
            type="submit"
            id="logins"
            className="login"
            disabled={isValid ? false : true}
            onClick={goToMain}
            value="로그인"
          />
          {/* disabled */}
        </form>
        <a href="#" className="forget">
          비밀번호를 잊으셨나요?
        </a>
      </div>
      <script src="login.js" />
    </div>
  );
};

export default Login;
