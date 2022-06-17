import './Login.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const ERROR_MESSAGE = {
  INVALID_EMAIL: '이메일 혹은 비밀번호를 확인 해 주세요',
  INVALID_PASSWORD: '이메일 혹은 비밀번호를 확인 해 주세요',
};

function Login() {
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });
  const navigate = useNavigate();

  const { userId, userPw } = userInfo;

  const getUserInfo = e => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const enterService = endpoint => {
    fetch(`http://10.58.7.17:8000/users/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          response.json();
        }
        throw new Error('통신실패');
      })
      .then(response => {
        if (response.message === 'SUCCESS') {
          window.localStorage.setItem('token', response.access_token);
          navigate('/main-yejee');
        } else {
          alert(ERROR_MESSAGE[response.message]);
        }
      })
      .catch(err => console.log(err));
  };
  const isValid = userId.includes('@') && userPw.length >= 5;

  return (
    <div className="loginBox">
      <div className="border">
        <h1 className="logo">Westagram</h1>
        <form
          className="loginForm"
          onSubmit={() => {
            enterService('signin');
          }}
        >
          <input
            placeholder="전화번호 사용자 이름 또는 이메일"
            id="id"
            //TODO : id 선택자 지양. 리팩토링할 때 className만 쓰도록 수정하고 이 주석 지우기
            className="login"
            name="userId"
            onChange={getUserInfo}
          />
          <input
            type="password"
            placeholder="비밀번호"
            id="password"
            //TODO : id 선택자 지양. 리팩토링할 때 className만 쓰도록 수정하고 이 주석 지우기
            name="userPw"
            className="login"
            onChange={getUserInfo}
          />
          <button
            type="button"
            className="loginButton"
            style={{
              background: isValid ? '#0095F6' : 'rgba(0, 149, 246, 0.3)',
            }}
            disabled={isValid ? false : true}
          >
            로그인
          </button>
        </form>
        <p className="forgottenPassword">비밀번호를 잊으셨나요?</p>
      </div>
      <div className="joinBox">
        <span>계정이 없으신가요?</span>
        <button
          onClick={() => {
            enterService('signup');
          }}
        >
          가입하기
        </button>
      </div>
    </div>
  );
}

export default Login;
