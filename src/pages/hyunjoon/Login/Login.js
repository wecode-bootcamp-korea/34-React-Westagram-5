import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './Login.scss';

function Login() {
  //개발할 때 이렇게 개인정보가 노출되는 코드를 직관적으로 알아볼수있게 노출시키진 않습니다. 참고 해 주세요!
  const rightId = 'nodie2676@empal.com ';
  const rightPw = '@@2918Gus';

  const navigate = useNavigate();

  //이 로그인 페이지에서는 fetch가 동작하는 시점이, ID, PW를 입력하고, 유효성 검사가 끝나고, 버튼을 누를 "때" 동작하길 원하는데,
  //useEffect에 넣으면, 일단 마운트 되고 바로 한번 fetch 메서드가 호출 됩니다.
  //동작 시점을 언제 둘꺼냐에 따라 useEffect, 혹은 callback함수에 적절히 써야 합니다.
  useEffect(() => {
    //fetch는 review/sangwoon PR을 참고 해 주세요~
    fetch('http://10.58.6.230:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: rightId,
        password: rightPw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('access_token', data.access_token);
        //이렇게요
        navigate('/이동할경로');
      });
  }, []);

  //navigate()자체로 호출 가능하기때문에, fetch 이후 token을 저장한 후에 navigate를 호출하면 됩니다.
  const goToMain = () => {
    navigate('/main-hyunjoon');
  };

  //state에 배열이나, 객체도 initialState로 관리할 수 있습니다.
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [color, setColor] = useState('skyblue');

  const btnColorChange = () => {
    id.length > 1 && pw.length > 1 ? setColor('blue') : setColor('skyblue');
  };

  //일반적으로는 이렇게 특정 id와 pw 형식에 딱 맞는 조건으로 클라이언트에서 유효성검사를 하진않습니다.
  //서버에 id,pw가 저장되있고, 서버에 보내서 확인하는 방법이 일반적입니다.
  //그래서 이 코드는 불필요합니다.
  const rightIdPw = () => {
    if (id === rightId && pw === rightPw) {
      goToMain();
    }
  };

  //조건을 세분화 해주셨네요
  //만약 세분화 된 조건들을 다 포함하는 조건문을 만들면 20줄 가까이 되는 코드를 1줄로 줄일 수 있겠습니다.
  //아래처럼 "id에 @ 이 포함되 있어야 하고, 비밀번호가 6자 이상인 두개의 조건을 모두 만족하면" 이란 조건이
  // wrongIdPw 함수에서 실행될 조건문을 다 포함하는것으로 보입니다.
  const isValid = id.includes('@') && pw.length > 6;

  //세분화 하면
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

  //화살표함수로 통일 해 주세요~
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
              // 구조분해할당 잘 해주셨습니다 👏🏻
              // 이벤트 함수는 UI 단에서 분리해서 로직부분에서 관리해주시는게 가독성과 유지보수에 좋겠습니다.
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
