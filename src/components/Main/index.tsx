import { useEffect } from 'react';
import { getCards } from '../../redux/cardsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Card from '../Card';
import styles from './Main.module.scss';

const Main = () => {
  const { cards } = useAppSelector((state) => state.cardsSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);
  return (
    <div className={styles.inner}>
      {cards.map((card) => (
        <Card
          key={card.id}
          images={card.large_cover_image}
          title={card.title}
          genre={card.genres}
          rating={card.rating}
          favorites={false}
        />
      ))}
    </div>
  );
};

export default Main;
