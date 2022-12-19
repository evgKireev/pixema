import classNames from 'classnames';
import styles from './Button.module.scss';

export enum ButtonTypeEnum {
  Primary = 'primary',
  Secondary = 'secondary',
}

type ButtonType = {
  title: string;
  type: ButtonTypeEnum;
  onClick: () => void;
  disabled: boolean;
  className: string;
};

const Button: React.FC<ButtonType> = ({
  title,
  onClick,
  type,
  disabled,
  className,
}) => {
  const buttonStyles = styles[type];
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(styles.button, buttonStyles, className, {
          [styles.disabled]: disabled,
        })}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
