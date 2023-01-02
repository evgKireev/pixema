import classNames from 'classnames';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillFire } from 'react-icons/ai';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { CardType } from '../../@types/types/cards';

type CardTypeOne = {
  images: string;
  title: string;
  genre: string[];
  rating: number;
  id: number;
  card: CardType;
};

const Card: React.FC<CardTypeOne> = ({
  images,
  title,
  genre,
  rating,
  id,
  card,
}) => {
  const { cardsFavorites } = useAppSelector((state) => state.cardsSlice);
  const isBookmark =
    cardsFavorites.findIndex((value) => value.id === card.id) > -1;
  return (
    <Link to={`/one-card/${id}`}>
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
        {isBookmark && (
          <span className={styles.favorites}>
            <BsFillBookmarkFill />
          </span>
        )}
      </div>
    </Link>
  );
};

export default Card;
