import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValueBuregrMenu } from '../../redux/otherSlice';
import Categories from '../Categories';
import { IoMdClose } from 'react-icons/io';
import User from '../User';
import styles from './Menu.module.scss';
const Menu = () => {
  const { valueBuregrMenu } = useAppSelector((state) => state.otherSlice);
  const dispatch = useAppDispatch();
  return (
    <div
      className={classNames(styles.innerMenu, {
        [styles.innerActive]: valueBuregrMenu,
      })}
    >
      <IoMdClose
        className={styles.close}
        onClick={() => dispatch(setValueBuregrMenu(false))}
      />
      <User
        className={classNames(styles.wrapper)}
        classNameTo={styles.wrapperBurger}
        onClose={() => dispatch(setValueBuregrMenu(!valueBuregrMenu))}
      />
      <Categories
        onClose={() => dispatch(setValueBuregrMenu(!valueBuregrMenu))}
        className={styles.inner}
      />
    </div>
  );
};

export default Menu;
