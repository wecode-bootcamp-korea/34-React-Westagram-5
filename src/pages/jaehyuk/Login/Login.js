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
      navigate('/main-jaehyuk');
    } else {
      alert('틀렸습니다.');
    }
  };

  const [id, setId] = useState('');
  const handleIdInput = event => {
    console.log('id.value: ', id);
    setId(event.target.value);
  };
  const [pw, setPw] = useState('');
  const handlePwInput = event => {
    console.log('pw.value: ', pw);
    setPw(event.target.value);
  };

  const [buttonColor, setButtonColor] = useState('#badef9');
  const changeButtonColor = event => {
    return id.includes('@') && pw.length >= 5
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
        <form action="" method="post" className="loginMethod">
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
          <button
            className="btn"
            type="submit"
            onClick={goToMain}
            style={{ backgroundColor: buttonColor }}
          >
            로그인
          </button>
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
