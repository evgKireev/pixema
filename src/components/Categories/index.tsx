import styles from './Categories.module.scss';
import { RiHome6Fill } from 'react-icons/ri';
import { AiFillFire } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValueCategories } from '../../redux/categoriesSlice';
const Categories = () => {
  const { valueCategories } = useAppSelector((state) => state.categoriesSlice);
  const dispatch = useAppDispatch();
  const categories = [
    { name: 'Home', icon: <RiHome6Fill />, link: '/' },
    { name: 'Trends', icon: <AiFillFire />, link: '' },
    { name: 'Favorites', icon: <BsFillBookmarkFill />, link: '' },
    { name: 'Settings', icon: <MdSettings />, link: 'settings' },
  ];
  return (
    <>
      <ul className={styles.inner}>
        {categories.map((item, index) => (
          <div
            className={classNames(styles.item, {
              [styles.active]: valueCategories === index,
            })}
            key={index}
            onClick={() => {
              dispatch(setValueCategories(index));
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
