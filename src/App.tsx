import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import NoFaund from './components/NoFaund';
import Home from './pages/Home/Home';
import './scss/app.scss';

const App = () => {
  return (
    <div className="conatiner">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="*" element={<NoFaund />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
