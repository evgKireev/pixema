import { useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Main from './components/Main';
import NoFaund from './components/NoFaund';
import Home from './pages/Home/Home';
import NewPassword from './pages/NewPassword/NewPassword';
import OneCard from './pages/OneCard/OneCard';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Settings from './pages/Settings/Settings';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import './scss/app.scss';

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (
      pathname === '/signin' ||
      pathname === '/signup' ||
      pathname === '/resetpassword' ||
      pathname === '/newpassword'
    ) {
      const body = document.querySelector('body');
      body?.classList.add('bodyBg');
    }
    return () => {
      const body = document.querySelector('body');
      body?.classList.remove('bodyBg');
    };
  }, [pathname]);
  return (
    <div className="conatiner">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="one-card/:id" element={<OneCard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NoFaund />} />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="newpassword" element={<NewPassword />} />
      </Routes>
    </div>
  );
};

export default App;
