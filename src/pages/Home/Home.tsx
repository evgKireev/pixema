import { Outlet, useLocation, useNavigate } from 'react-router-dom';
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
  const { valueCategories } = useAppSelector((state) => state.categoriesSlice);
  const { pathname } = useLocation();

  useEffect(() => {
    if (registered) {
      dispatch(getUser());
    }
  }, [registered]);
  return (
    <div>
      <Header />
      <div className={styles.inner}>
        <Categories />
        <Outlet />
        <FilterModal refSvg={svgFilter} />
      </div>
      {valueCategories === 0 && pathname === '/' ? (
        <div className={styles.innerSvg} ref={svgFilter}>
          <AiFillFilter
            onClick={() => dispatch(setValueModalFilter(true))}
            className={styles.filterIcon}
          />
        </div>
      ) : null}
      {(valueCategories === 0 && pathname === '/') ||
      (valueCategories === 1 && pathname === '/') ? (
        <div className={styles.innerSvgArrow}>
          <TfiArrowCircleUp
            className={styles.arrowIcon}
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }
          />
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Home;
