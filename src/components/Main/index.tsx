import { useEffect } from 'react';
import { getCards } from '../../redux/cardsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Card from '../Card';
import Loading from '../Loader';
import styles from './Main.module.scss';

const Main = () => {
  const { cards } = useAppSelector((state) => state.cardsSlice);
  const { statusCards } = useAppSelector((state) => state.cardsSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);

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
      ) : (
        cards.map((card) => (
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
