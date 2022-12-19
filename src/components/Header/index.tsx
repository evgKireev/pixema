import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo';
import Search from '../Search';
import User from '../User';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.logo}>
        <Link to={'/'}>
          <Logo />
        </Link>
      </div>
      <div className={styles.innerBlock}>
        <Search />
        <User />
      </div>
    </div>
  );
};

export default Header;
