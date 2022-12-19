import classNames from 'classnames';
import styles from './Input.module.scss';
type SearchType = {
  disabled: boolean;
  error: boolean;
  placeholder: string;
};

const Input: React.FC<SearchType> = ({ disabled, error, placeholder }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        className={classNames(styles.input, {
          [styles.disabled]: disabled,
          [styles.error]: error,
        })}
      />
      {error && <span className={styles.spanError}>Error text</span>}
    </>
  );
};
export default Input;
