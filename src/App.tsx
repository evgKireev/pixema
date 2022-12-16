import Card from './components/Card';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import './scss/app.scss';

const App = () => {
  return (
    <div className="conatiner">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
};

export default App;
