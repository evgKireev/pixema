import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './components/Main';
import NoFaund from './components/NoFaund';
import Home from './pages/Home/Home';
import OneCard from './pages/OneCard/OneCard';
import Settings from './pages/Settings/Settings';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { useAppSelector } from './redux/hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './scss/app.scss';

const App = () => {
  const { pathname } = useLocation();
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const body = document.querySelector('body');
  if (valueTheme) {
    body?.classList.add('bodyWhite');
  } else {
    body?.classList.remove('bodyWhite');
  }

  useEffect(() => {
    if (
      pathname === '/signin' ||
      pathname === '/signup' ||
      pathname === '/resetpassword' ||
      pathname === '/newpassword'
    ) {
      body?.classList.add('bodyBg');
    }
    return () => {
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
      </Routes>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;
