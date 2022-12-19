import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Main from './components/Main';
import NoFaund from './components/NoFaund';
import Home from './pages/Home/Home';
import OneCard from './pages/OneCard/OneCard';
import Settings from './pages/Settings/Settings';
import SignIn from './pages/SignIn/SignIn';
import './scss/app.scss';

const App = () => {
  const { pathname } = useLocation();
  if (pathname === '/signin') {
    const body = document.querySelector('body');
    body?.classList.add('bodyBg');
  }

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
      </Routes>
    </div>
  );
};

export default App;
