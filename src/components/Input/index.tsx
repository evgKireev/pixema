import classNames from 'classnames';
import { useAppSelector } from '../../redux/hooks';
import styles from './Input.module.scss';
type SearchType = {
  disabled: boolean;
  error: boolean;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
};

const Input: React.FC<SearchType> = ({
  disabled,
  error,
  placeholder,
  onChange,
  type,
  className,
}) => {
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(styles.input, className, {
          [styles.disabled]: disabled,
          [styles.error]: error,
          [styles.themeWhite]: valueTheme,
        })}
      />
      {error && <span className={styles.spanError}>Error text</span>}
    </>
  );
};
export default Input;
