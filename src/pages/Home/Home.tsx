import { Outlet } from 'react-router-dom';
import Categories from '../../components/Categories';
import FilterModal from '../../components/FiltersModal';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { AiFillFilter } from 'react-icons/ai';
import { useRef } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setValueModalFilter } from '../../redux/otherSlice';
import styles from './Home.module.scss';

const Home = () => {
  const svgFilter = useRef(null);
  const dispatch = useAppDispatch();
  return (
    <>
      <Header />
      <div className={styles.inner}>
        <Categories />
        <Outlet />
        <FilterModal refSvg={svgFilter} />
      </div>
      <div className={styles.innerSvg} ref={svgFilter}>
        <AiFillFilter
          onClick={() => dispatch(setValueModalFilter(true))}
          className={styles.filterIcon}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
