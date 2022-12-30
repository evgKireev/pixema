import classNames from 'classnames';
import React, { useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUser } from '../../redux/signInAuthSlice';
import styles from './User.module.scss';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from 'react-icons/md';

const User = () => {
  const userActive = ['Edit profile', 'Log Out'];
  const [activUser, setActiveUser] = React.useState<number | null>(null);
  const [openModalUser, setOpenModalUser] = React.useState<boolean>(false);
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const { registered } = useAppSelector((state) => state.signInAuthSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activUser === 1) {
      dispatch(logoutUser());
    }
  }, [activUser]);

  const arrow = openModalUser ? (
    <MdKeyboardArrowUp
      className={styles.arrow}
      onClick={() => setOpenModalUser(!openModalUser)}
    />
  ) : (
    <MdKeyboardArrowDown
      className={styles.arrow}
      onClick={() => setOpenModalUser(!openModalUser)}
    />
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.card}>
          {registered ? (
            <h3 style={{ color: 'white' }}>AA</h3>
          ) : (
            <FiUser className={styles.svg} />
          )}
        </div>
        <div className={styles.user}>
          {registered ? 'User name' : 'Sign in'}
        </div>
        {registered ? (
          arrow
        ) : (
          <Link to={'signin'}>
            <MdKeyboardArrowRight className={styles.arrow} />
          </Link>
        )}
      </div>
      <div
        className={classNames(styles.userActiveInner, {
          [styles.blockModal]: openModalUser,
          [styles.themeWhite]: valueTheme,
        })}
      >
        <ul>
          {userActive.map((value, index) => (
            <li
              onClick={() => {
                setActiveUser(index);
                setOpenModalUser(false);
              }}
              className={classNames(styles.item, {
                [styles.itemThemeWhite]: valueTheme,
              })}
              key={index}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
