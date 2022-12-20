import { useEffect } from 'react';
import { getCards, getCardsTrend } from '../../redux/cardsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Card from '../Card';
import Loading from '../Loader';
import NoInfo from '../NoInfo';
import styles from './Main.module.scss';

const Main = () => {
  const { cards } = useAppSelector((state) => state.cardsSlice);
  const { cardsTrends } = useAppSelector((state) => state.cardsSlice);
  const { statusCards } = useAppSelector((state) => state.cardsSlice);
  const { valueCategories } = useAppSelector((state) => state.categoriesSlice);
  const { searchValue } = useAppSelector((state) => state.cardsSlice);
  const { cardsFavorites } = useAppSelector((state) => state.cardsSlice);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCards({ query_term: searchValue }));
    dispatch(getCardsTrend());
    localStorage.setItem('cart', JSON.stringify(cardsFavorites));
  }, [searchValue]);

  const getCardsCheck = () => {
    if (valueCategories === 1) {
      return cardsTrends;
    } else if (valueCategories === 2) {
      return cardsFavorites;
    } else {
      return cards;
    }
  };
  const cardsArray = getCardsCheck();
  if (statusCards === 'rejected')
    return (
      <div className={styles.error}>
        <h2>
          Произошла ошибка <span>😕</span>
        </h2>
        <p>
          К сожалению, не удалось получить фильмы. Попробуйте повторить попытку
          позже!
        </p>
      </div>
    );
  return (
    <div className={styles.inner}>
      {statusCards === 'pennding' ? (
        <Loading />
      ) : !cardsArray || !cardsArray.length ? (
        <NoInfo title={'There are no movies for your request'} />
      ) : (
        cardsArray.map((card) => (
          <Card
            card={card}
            key={card.id}
            images={card.large_cover_image}
            title={card.title}
            genre={card.genres}
            rating={card.rating}
            id={card.id}
          />
        ))
      )}
    </div>
  );
};

export default Main;
