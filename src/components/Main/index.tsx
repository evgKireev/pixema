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
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCards({ query_term: searchValue }));
    dispatch(getCardsTrend());
  }, [searchValue]);

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

  const getCardsCheck = () => {
    if (valueCategories === 1) {
      return cardsTrends;
    } else {
      return cards;
    }
  };

  const cardsArray = getCardsCheck()

  if (!cardsArray) {
    return <NoInfo title={'There are no movies for your request'} />;
  }

  return (
    <div className={styles.inner}>
      {statusCards === 'pennding' ? (
        <Loading />
      ) : (
        cardsArray.map((card) => (
          <Card
            key={card.id}
            images={card.large_cover_image}
            title={card.title}
            genre={card.genres}
            rating={card.rating}
            favorites={false}
            id={card.id}
          />
        ))
      )}
    </div>
  );
};

export default Main;
