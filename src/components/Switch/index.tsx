import classNames from 'classnames';
import styles from './Switch.module.scss';
const themeWhite = false;
const disabled = false;
const Switch = () => {
  return (
    <div
      className={classNames(styles.switch, {
        [styles.switchOff]: themeWhite,
        [styles.disabledSwitch]: disabled,
      })}
    >
      <div
        className={classNames(styles.circle, {
          [styles.offSwitch]: themeWhite,
        })}
      ></div>
    </div>
  );
};

export default Switch;
