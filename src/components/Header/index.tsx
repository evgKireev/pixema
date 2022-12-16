import Logo from '../../assets/img/logo';
import Search from '../Search';
import User from '../User';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.inner}>
      <Logo />
      <div className={styles.innerBlock}>
        <Search disabled={false} filters={false} />
        <User />
      </div>
    </div>
  );
};

export default Header;
