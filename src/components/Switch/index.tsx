import classNames from 'classnames';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getValueTheme } from '../../redux/themeSlice';
import styles from './Switch.module.scss';
const disabled = false;

const Switch = () => {
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(getValueTheme(valueTheme))}
      className={classNames(styles.switch, {
        [styles.switchOff]: valueTheme,
        [styles.disabledSwitch]: disabled,
      })}
    >
      <div
        className={classNames(styles.circle, {
          [styles.offSwitch]: valueTheme,
        })}
      ></div>
    </div>
  );
};

export default Switch;
