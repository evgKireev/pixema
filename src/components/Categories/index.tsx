import { RiHome6Fill } from 'react-icons/ri';
import { AiFillFire } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import {
  getCards,
  setCardsFilter,
  setCardsRender,
  setCardsTrendRender,
  setPage,
  setPageTrends,
} from '../../redux/cardsSlice';
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

type CategoriesType = {
  className?: string;
  onClose: () => void;
};

const Categories: React.FC<CategoriesType> = ({ className, onClose }) => {
  const { valueCategories } = useAppSelector((state) => state.categoriesSlice);
  const { valueBuregrMenu } = useAppSelector((state) => state.otherSlice);
  const { registered } = useAppSelector((state) => state.signInAuthSlice);
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
      <ul className={classNames(styles.inner, className)}>
        {categories.map((item, index) => (
          <div
            className={classNames(styles.item, {
              [styles.active]: valueCategories === index,
              [styles.disabled]: item.disabled === registered,
            })}
            key={index}
            onClick={() => {
              onClose();
              dispatch(setValueCategories(index));
              if (item.name === 'Home') {
                dispatch(setValueTabs('year'));
                dispatch(setInputValue(''));
                dispatch(setUserGenre(''));
                dispatch(setCardsRender([]));
                dispatch(setCardsFilter([]));
                dispatch(setPage(1));
              } else if (item.name === 'Trends') {
                dispatch(setPageTrends(1));
                dispatch(setCardsTrendRender([]));
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
