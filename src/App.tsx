import Categories from './components/Categories';
import Header from './components/Header';
import User from './components/User';
import './scss/app.scss';

const App = () => {
  return (
    <div className="conatiner">
      <Header />
      <Categories />
    </div>
  );
};

export default App;
