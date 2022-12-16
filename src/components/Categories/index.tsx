import styles from './Categories.module.scss';
import { RiHome6Fill } from 'react-icons/ri';
import { AiFillFire } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import { useState } from 'react';
import classNames from 'classnames';
const Categories = () => {
  const [valueCategories, setValueCategories] = useState(0);
  const categories = [
    { name: 'Home', icon: <RiHome6Fill /> },
    { name: 'Trends', icon: <AiFillFire /> },
    { name: 'Favorites', icon: <BsFillBookmarkFill /> },
    { name: 'Settings', icon: <MdSettings /> },
  ];
  return (
    <>
      <ul>
        {categories.map((item, index) => (
          <div
            className={classNames(styles.item, {
              [styles.active]: valueCategories === index,
            })}
            key={index}
            onClick={() => setValueCategories(index)}
          >
            <div className={styles.icon} key={index}>
              {item.icon}
            </div>
            <li className={styles.li} key={item.name}>
              {item.name}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Categories;
