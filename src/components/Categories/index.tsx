import { RiHome6Fill } from 'react-icons/ri';
import { AiFillFire } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import { getCards, setPage } from '../../redux/cardsSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValueCategories } from '../../redux/categoriesSlice';
import {
  setInputValue,
  setUserGenre,
  setValueTabs,
} from '../../redux/filtersSlice';
import classNames from 'classnames';
import styles from './Categories.module.scss';

const Categories = () => {
  const { valueCategories } = useAppSelector((state) => state.categoriesSlice);
  const { registered } = useAppSelector((state) => state.signInAuthSlice);
  const { page } = useAppSelector((state) => state.cardsSlice);
  const dispatch = useAppDispatch();
  const categories = [
    { name: 'Home', icon: <RiHome6Fill />, link: '/' },
    { name: 'Trends', icon: <AiFillFire />, link: '' },
    {
      name: 'Favorites',
      icon: <BsFillBookmarkFill />,
      link: '',
      disabled: false,
    },
    {
      name: 'Settings',
      icon: <MdSettings />,
      link: 'settings',
      disabled: false,
    },
  ];
  return (
    <>
      <ul className={styles.inner}>
        {categories.map((item, index) => (
          <div
            className={classNames(styles.item, {
              [styles.active]: valueCategories === index,
              [styles.disabled]: item.disabled === registered,
            })}
            key={index}
            onClick={() => {
              dispatch(setValueCategories(index));
              if (item.name === 'Home') {
                dispatch(setValueTabs('year'));
                dispatch(setInputValue(''));
                dispatch(setUserGenre(''));
                dispatch(
                  getCards({
                    query_term: '',
                    sort_by: '',
                    genre: '',
                    page,
                    isOverwrite: false,
                  })
                );
                dispatch(setPage(1));
              }
            }}
          >
            <div className={styles.icon} key={index}>
              {item.icon}
            </div>
            <Link to={item.link}>
              <li className={styles.li} key={item.name}>
                {item.name}
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Categories;
