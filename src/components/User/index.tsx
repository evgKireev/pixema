import classNames from 'classnames';
import React from 'react';
import { FiUser } from 'react-icons/fi';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import styles from './User.module.scss';
const registerUser = true;

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
          <FiUser className={styles.svg} />
        </div>
        <div className={styles.user}>
          {registerUser ? 'User name' : 'Sign in'}
        </div>
        {registerUser ? (
          arrow
        ) : (
          <MdKeyboardArrowRight className={styles.arrow} />
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
