import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './GlobalStyle';

//pages
import Start from './pages/Start/Start';
import SignIn1 from './pages/SignIn/SignIn1';
import SignIn2 from './pages/SignIn/SignIn2';
import SignIn4 from './pages/SignIn/SignIn4';
import SignIn5 from './pages/SignIn/SignIn5';
// login
import Login from './pages/Login/Login';
// main
import Main from './pages/Main/Main';

// exercise
import Exercise from './pages/Exercise/Exercise';
import TimerStart from './pages/Exercise/TimerStart';
import Timer from './pages/Exercise/Timer';

// search
import Map from './pages/Map/Map';

// community
import Community from './pages/Community/Community';
import Insert from './pages/Community/Insert';

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            {/* 로그인 flow */}
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin-1" element={<SignIn1 />} />
            <Route path="/signin-2" element={<SignIn2 />} />
            <Route path="/signin-5" element={<SignIn5 />} />

            <Route path="/main" element={<Main/>}/>

            <Route path="/exercise" element={<Exercise />} />
            <Route path="/timer-start" element={<TimerStart />} />
            <Route path="/timer" element={<Timer />} />

            <Route path="/map" element={<Map />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community-insert" element={<Insert />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
