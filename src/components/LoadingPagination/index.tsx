import styles from './LoadingPagination.module.scss';

const LoadingPogination = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p>Show more</p>
        <div className={styles.ldsHourglass}></div>
      </div>
    </div>
  );
};

export default LoadingPogination;
