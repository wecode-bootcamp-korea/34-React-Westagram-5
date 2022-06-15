import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './Login.scss';

function Login() {
  const rightId = 'nodie2676@empal.com ';
  const rightPw = '@@2918Gus';
  useEffect(() => {
    fetch('http://10.58.6.230:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: rightId,
        password: rightPw,
      }),
    })
      .then(res => res.json())
      .then(data => localStorage.setItem('access_token', data.access_token));
  }, []);

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-hyunjoon');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [color, setColor] = useState('skyblue');

  const btnColorChange = () => {
    id.length > 1 && pw.length > 1 ? setColor('blue') : setColor('skyblue');
  };

  const rightIdPw = () => {
    if (id === rightId && pw === rightPw) {
      goToMain();
    }
  };
  const wrongIdPw = () => {
    if (id.indexOf('@') === -1) {
      alert('아이디는 이메일형식으로 입력해주세요');
      return;
    }
    if (id !== rightId) {
      alert('아이디를 확인하세요');
      return;
    }

    if (pw.length < 6) {
      alert('비밀번호는 6글자 이상 입력해주세요');
      return;
    }
    if (pw !== rightPw) {
      alert('비밀번호 확인하세요');
      return;
    }
  };
  function consoleId(event) {
    event.preventDefault();
    rightIdPw();
    wrongIdPw();
  }
  return (
    <div className="login">
      <div className="content">
        <div id="text">westagram</div>
        <div className="westaBox">
          <form
            onKeyUp={btnColorChange}
            onSubmit={consoleId}
            className="loginBox"
          >
            <input
              name="id"
              value={id}
              onChange={({ target: { value } }) => setId(value)}
              className="ID"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
            <input
              name="pw"
              value={pw}
              onChange={({ target: { value } }) => setPw(value)}
              className="PW"
              type="password"
              placeholder="비밀번호"
            />
            <button style={{ backgroundColor: color }}>로그인</button>
          </form>
          <a id="forget" href="">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;
