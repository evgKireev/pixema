import classNames from 'classnames';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillFire } from 'react-icons/ai';
import styles from './Card.module.scss';

type CardType = {
  images: string;
  title: string;
  genre: string[];
  rating: number;
  favorites: boolean;
};

const Card: React.FC<CardType> = ({
  images,
  title,
  genre,
  rating,
  favorites,
}) => {
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
      <span
        className={classNames(styles.rating, {
          [styles.ratingOrange]: rating <= 5,
          [styles.ratingEllow]: rating > 5 && rating <= 7,
          [styles.ratingGreen]: rating > 7 && rating <= 8.5,
          [styles.ratingBlue]: rating > 8.5,
        })}
      >
        {rating > 8.5 ? <AiFillFire /> : ''}
        {rating}
      </span>
      {favorites && (
        <span className={styles.favorites}>
          <BsFillBookmarkFill />
        </span>
      )}
    </div>
  );
};

export default Card;
