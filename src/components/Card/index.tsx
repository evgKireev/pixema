import styles from './Card.module.scss';

type CardType = {
  images: string;
  title: string;
  genre: string[];
};

const Card: React.FC<CardType> = ({ images, title, genre }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={images}></img>
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.list}>
          {genre.map((value, index) => (
            <li className={styles.genre} key={index}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
