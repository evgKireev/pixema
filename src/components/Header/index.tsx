import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo';
import LogoWhite from '../../assets/img/logoWhite';
import { useAppSelector } from '../../redux/hooks';
import Search from '../Search';
import User from '../User';
import styles from './Header.module.scss';

const Header = () => {
  const { valueTheme } = useAppSelector((state) => state.themeSlice);

  return (
    <div className={styles.inner}>
      <div className={styles.logo}>
        <Link to={'/'}>{valueTheme ? <LogoWhite /> : <Logo />}</Link>
      </div>
        <Search />
        <User />
    </div>
  );
};

export default Header;
