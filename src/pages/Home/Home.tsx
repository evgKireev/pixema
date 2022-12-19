import { Outlet } from 'react-router-dom';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Input from '../../components/Input';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.inner}>
        <Categories />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Home;
