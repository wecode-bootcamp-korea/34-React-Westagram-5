import { React, useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [btnState, setBtnState] = useState(true);

  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.0.27:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('Key', data.access_token);
      });
    // navigate('/main-sangwon');
  };

  const handleIdInput = e => {
    setInputId(e.target.value);
  };

  const handlePwInput = e => {
    setInputPw(e.target.value);
  };

  const handleActive = () => {
    inputId.indexOf('@') > -1 && inputPw.length >= 5
      ? setBtnState(false)
      : setBtnState(true);
  };

  // fetch('http://10.58.0.27:8000/signin', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: inputId,
  //     password: inputPw,
  //   }),
  // })
  //   .then(response => response.json())
  //   .then(data => console.log('nice'));

  return (
    <div className="login">
      <div className="loginWrapper">
        <span className="loginTitle">westagram</span>
        <form
          className="loginInputBox"
          onSubmit={goToMain}
          onKeyUp={handleActive}
        >
          <input
            type="text"
            className="idBox"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
          <input
            type="password"
            className="pwBox"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <input
            type="submit"
            id="logins"
            className="login"
            disabled={btnState}
            onClick={goToMain}
            value="로그인"
          />
          {/* disabled */}
        </form>
        <a href="#" className="forget">
          비밀번호를 잊으셨나요?
        </a>
      </div>
      <script src="login.js"></script>
    </div>
  );
}
