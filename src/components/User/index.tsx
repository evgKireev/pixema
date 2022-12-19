import classNames from 'classnames';
import React from 'react';
import { FiUser } from 'react-icons/fi';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './User.module.scss';
const registerUser = false;

const User = () => {
  const userActive = ['Edit profile', 'Log Out'];
  const [activUser, setActiveUser] = React.useState<number | null>(null);
  const [openModalUser, setOpenModalUser] = React.useState<boolean>(false);
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
          {registerUser ? (
            <h3 style={{ color: 'white' }}>AA</h3>
          ) : (
            <FiUser className={styles.svg} />
          )}
        </div>
        <div className={styles.user}>
          {registerUser ? 'User name' : 'Sign in'}
        </div>
        {registerUser ? (
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
                [styles.active]: activUser === index,
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
