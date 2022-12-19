import styles from './NoInfo.module.scss';
import img from '../../assets/noCard.png';

type NoInfoType = {
  title: string;
};

const NoInfo: React.FC<NoInfoType> = ({ title }) => {
  return (
    <div className={styles.inner}>
      <img src={img} alt="no info img" />
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default NoInfo;
