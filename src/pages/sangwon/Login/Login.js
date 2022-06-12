import { React, useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [btn, setBtn] = useState(true);

  // const goToMain = () => {
  //   if (inputId === realInfo[0] && inputPw === realInfo[1]) {
  //     navigate("/main");
  //   } else {
  //     alert("아이디/비밀번호를 확인해주세요");
  //   }
  // };

  const goToMain = () => {
    console.log('ID : ', inputId, ' / PW : ', inputPw);
    navigate('/main-sangwon');
  };

  const handleIdInput = e => {
    setInputId(e.target.value);
  };

  const handlePwInput = e => {
    setInputPw(e.target.value);
  };

  const active = () => {
    inputId.indexOf('@') > -1 && inputPw.length >= 5
      ? setBtn(false)
      : setBtn(true);
  };

  const loginEnter = e => {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
      goToMain();
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <span className="loginTitle">westagram</span>
        <input
          type="text"
          className="idBox"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          // onChange={(e) => setInputId(e.target.value)}
          onKeyUp={active}
          onKeyDown={loginEnter}
          onChange={handleIdInput}
        />
        <input
          type="password"
          className="pwBox"
          placeholder="비밀번호"
          // onChange={(e) => setInputPw(e.target.value)}
          onKeyUp={active}
          onKeyDown={loginEnter}
          onChange={handlePwInput}
        />
        <button id="logins" className="login" disabled={btn} onClick={goToMain}>
          {/* disabled */}
          로그인
        </button>
        <a href="#" className="forget">
          비밀번호를 잊으셨나요?
        </a>
      </div>
      <script src="login.js"></script>
    </div>
  );
}
