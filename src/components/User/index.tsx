import classNames from 'classnames';
import React, { useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUser } from '../../redux/signInAuthSlice';
import styles from './User.module.scss';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { setValueCategories } from '../../redux/categoriesSlice';
import Burger from '../Burger';

type UserType = {
  className?: string;
  classNameTo?: string;
  onClose: () => void;
};

const User: React.FC<UserType> = ({ className, classNameTo, onClose }) => {
  const userActive = ['Edit profile', 'Log Out'];
  const [activUser, setActiveUser] = React.useState<number | null>(null);
  const [openModalUser, setOpenModalUser] = React.useState<boolean>(false);
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const { registered } = useAppSelector((state) => state.signInAuthSlice);
  const { userInfo } = useAppSelector((state) => state.signInAuthSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (activUser === 1) {
      dispatch(logoutUser());
    } else if (activUser === 0) {
      navigate('/settings');
      dispatch(setValueCategories(3));
      setActiveUser(null);
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
    <>
      <div className={classNames(styles.wrapper, className)}>
        <div className={styles.inner}>
          <div className={styles.card}>
            {registered ? (
              <h3 style={{ color: 'white' }}>
                {userInfo?.name[0].toLocaleUpperCase()}
              </h3>
            ) : (
              <FiUser className={styles.svg} />
            )}
          </div>

          <div className={styles.user}>
            {registered ? userInfo?.name : 'Sign in'}
          </div>
          {registered ? (
            arrow
          ) : (
            <Link to={'signin'}>
              <MdKeyboardArrowRight
                onClick={onClose}
                className={styles.arrow}
              />
            </Link>
          )}
        </div>
        <div
          className={classNames(styles.userActiveInner, className, {
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
                  onClose();
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
      <div className={classNames(styles.wrapperBurger, classNameTo)}>
        <Burger />
      </div>
    </>
  );
};

export default User;
