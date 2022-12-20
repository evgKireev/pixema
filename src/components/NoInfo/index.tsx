import styles from './NoInfo.module.scss';
import img from '../../assets/noCard.png';
import { useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';

type NoInfoType = {
  title: string;
};

const NoInfo: React.FC<NoInfoType> = ({ title }) => {
  const { valueTheme } = useAppSelector((state) => state.themeSlice);

  return (
    <div className={styles.inner}>
      <img
        className={classNames({ [styles.itemThemeWhite]: valueTheme })}
        src={img}
        alt="no info img"
      />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default NoInfo;
