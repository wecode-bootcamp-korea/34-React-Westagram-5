import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
// import "../../style/common.css";
// import "./Common.css"

function Login() {
  const navigate = useNavigate();
  const response = 'SUCCESS';
  const goToMain = () => {
    if (response === 'SUCCESS') {
      alert('환영합니다!');
      navigate('/main');
    } else {
      alert('틀렸습니다.');
    }
  };

  const [id, setId] = useState('');
  const handleIdInput = event => {
    setId(event.target.value);
    console.log('id.value: ', id);
  };
  const [pw, setPw] = useState('');
  const handlePwInput = event => {
    setPw(event.target.value);
    console.log('pw.value: ', pw);
  };

  return (
    <div className="login">
      <section className="loginWrapper">
        <div className="logoWrapper">
          <Link to="/main">
            <h1 id="logo">Westagram</h1>
          </Link>
        </div>
        <foam action="" method="post" className="loginMethod">
          <div className="inputWrap">
            <input
              type="text"
              id="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
            />
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
          </div>
          <button className="btn" type="submit" onClick={goToMain}>
            로그인
          </button>
        </foam>
        <div className="passwordWrong">
          <p>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
