import classNames from 'classnames';
import { useEffect } from 'react';
import { AiFillFire } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { RiShareLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  getCard,
  getSuggestions,
  setCardsFavorites,
} from '../../redux/cardsSlice';
import styles from './OneCard.module.scss';
import Loading from '../../components/Loader';
import MultipleItems from '../../components/Slider';

const OneCard = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { card } = useAppSelector((state) => state.cardsSlice);
  const { cardSuggestions } = useAppSelector((state) => state.cardsSlice);
  const { statusCards } = useAppSelector((state) => state.cardsSlice);
  const { cardsFavorites } = useAppSelector((state) => state.cardsSlice);
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const rating = card?.rating;
  const isBookmark =
    cardsFavorites.findIndex((value) => value.id === card?.id) > -1;

  useEffect(() => {
    dispatch(getCard(id));
    dispatch(getSuggestions(id));
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      {statusCards === 'pennding' ? (
        <Loading />
      ) : (
        <div className={styles.inner}>
          <div className={styles.photo}>
            <div className={styles.images}>
              <img src={card?.large_cover_image} alt="banner" />
            </div>
            <div>
              <div
                className={classNames(styles.btn, {
                  [styles.ThemeWhite]: valueTheme,
                })}
              >
                <BsFillBookmarkFill
                  className={classNames(styles.bookmark, {
                    [styles.isBookmark]: isBookmark,
                  })}
                  onClick={() => {
                    if (card) {
                      dispatch(setCardsFavorites(card));
                    }
                  }}
                />
                <RiShareLine className={styles.shareLine} />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <ul className={styles.list}>
              {card?.genres.map((value, index) => (
                <li className={styles.genre} key={index}>
                  {value}
                </li>
              ))}
            </ul>
            <h3 className={styles.title}>{card?.title}</h3>
            <div className={styles.label}>
              <span
                className={classNames(styles.rating, {
                  [styles.ratingOrange]: rating ? rating <= 5 : rating === 0,
                  [styles.ratingEllow]: rating ? rating > 5 && rating <= 7 : '',
                  [styles.ratingGreen]: rating
                    ? rating > 7 && rating <= 8.5
                    : '',
                  [styles.ratingBlue]: rating ? rating > 8.5 : '',
                })}
              >
                {rating && rating > 8.5 ? <AiFillFire /> : ''}
                {rating}
              </span>
              <span
                className={classNames(styles.rating, styles.time, {
                  [styles.ThemeWhite]: valueTheme,
                })}
              >
                123 min
              </span>
              <span
                className={classNames(styles.rating, styles.time, {
                  [styles.ThemeWhite]: valueTheme,
                })}
              >
                IMG {card?.runtime}
              </span>
            </div>
            <p className={styles.text}>{card?.description_full}</p>
            <div className={styles.innerList}>
              <ul>
                <li>Year</li>
                <li>Released</li>
                <li>BoxOffice</li>
                <li>Country</li>
                <li>Production</li>
                <li>Actors</li>
                <li>Director</li>
                <li>Writers</li>
              </ul>
              <ul>
                <li>{card?.year}</li>
                <li>15 Jul 2011</li>
                <li>$381,409,310</li>
                <li>United Kingdom, United States</li>
                <li>Heyday Films, Moving Picture Company, Warner Bros.</li>
                <li>Daniel Radcliffe, Emma Watson, Rupert Grint</li>
                <li>David Yates</li>
                <li>J.K. Rowling, Steve Kloves</li>
              </ul>
            </div>
            <h2>Recommendations</h2>
            <div className={styles.recomend}>
              {cardSuggestions && <MultipleItems cards={cardSuggestions} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OneCard;
