//현준 컴포넌트
import LoginHyunJoon from "./pages/hyunjoon/Login/Login";
import MainHyunJoon from "./pages/hyunjoon/Main/Main";
//예지 컴포넌트
import LoginYeJee from "./pages/yejee/Login/Login";
import MainYeJee from "./pages/yejee/Main/Main";
//상원 컴포넌트
import LoginSangWon from "./pages/sangwon/Login/Login";
import MainSangWon from "./pages/sangwon/Main/Main";
//재혁 컴포넌트
import LoginJaeHyuk from "./pages/jaehyuk/Login/Login";
import MainJaeHyuk from "./pages/jaehyuk/Main/Main";
import { BrowserRouter } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-yejee" element={<LoginYeJee />} />
        <Route path="/main-yejee" element={<MainYeJee />} />
        <Route path="/login-hyunjoon" element={<LoginHyunJoon />} />
        <Route path="/main-hyunjoon" element={<MainHyunJoon />} />
        <Route path="/login-jaehyuk" element={<LoginJaeHyuk />} />
        <Route path="/main-jaehyuk" element={<MainJaeHyuk />} />
        <Route path="/login-sangwon" element={<LoginSangWon />} />
        <Route path="/main-sangwon" element={<MainSangWon />} />
      </Routes>
    </BrowserRouter>
  );
}
