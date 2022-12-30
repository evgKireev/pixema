import { Outlet } from 'react-router-dom';
import Categories from '../../components/Categories';
import FilterModal from '../../components/FiltersModal';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { AiFillFilter } from 'react-icons/ai';
import { TfiArrowCircleUp } from 'react-icons/tfi';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValueModalFilter } from '../../redux/otherSlice';
import styles from './Home.module.scss';
import { getUser } from '../../redux/signInAuthSlice';

const Home = () => {
  const svgFilter = useRef(null);
  const dispatch = useAppDispatch();
  const { registered } = useAppSelector((state) => state.signInAuthSlice);
  useEffect(() => {
    if (registered) {
      dispatch(getUser());
    }
  }, [registered]);
  const d = window.scrollTo(0, 0);
  console.log(d);
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

      <div className={styles.innerSvgArrow}>
        <TfiArrowCircleUp
          className={styles.arrowIcon}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;
