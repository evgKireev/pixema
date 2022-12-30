import { useEffect } from 'react';
import { getCards, getCardsTrend, setPage } from '../../redux/cardsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Card';
import NoInfo from '../NoInfo';
import styles from './Main.module.scss';
import LoadingPogination from '../LoadingPagination';
import Loader from '../Loader';

const Main = () => {
  const { isOverGlobal } = useAppSelector((state) => state.cardsSlice);
  const { cardsTrends } = useAppSelector((state) => state.cardsSlice);
  const { statusCards } = useAppSelector((state) => state.cardsSlice);
  const { valueCategories } = useAppSelector((state) => state.categoriesSlice);
  const { searchValue } = useAppSelector((state) => state.cardsSlice);
  const { cardsFavorites } = useAppSelector((state) => state.cardsSlice);
  const { inputValue } = useAppSelector((state) => state.filtersSlice);
  const { valueTabs } = useAppSelector((state) => state.filtersSlice);
  const { selectGenre } = useAppSelector((state) => state.filtersSlice);
  const { page } = useAppSelector((state) => state.cardsSlice);
  const { cards } = useAppSelector((state) => state.cardsSlice);
  const { cardsFilter } = useAppSelector((state) => state.cardsSlice);
  const { cardsSearch } = useAppSelector((state) => state.cardsSlice);
  const { totalCaunt } = useAppSelector((state) => state.cardsSlice);
  const dispatch = useAppDispatch();
  const genreString = selectGenre.join('&');
  useEffect(() => {
    if (!isOverGlobal) {
      dispatch(
        getCards({
          query_term: searchValue,
          sort_by: '',
          genre: '',
          page,
          isOverwrite: false,
        })
      );
    } else {
      dispatch(
        getCards({
          query_term: inputValue,
          sort_by: valueTabs,
          genre: genreString,
          page,
          isOverwrite: true,
        })
      );
    }
    dispatch(getCardsTrend());
    localStorage.setItem('cart', JSON.stringify(cardsFavorites));
  }, [searchValue, page, inputValue, valueTabs, genreString]);

  const getCardsCheck = () => {
    if (valueCategories === 1) {
      return cardsTrends;
    } else if (valueCategories === 2) {
      return cardsFavorites;
    } else {
      if (isOverGlobal) {
        return cardsFilter;
      } else {
        return cards;
      }
    }
  };
  const cardsArray = getCardsCheck();
  const onScroll = () => {
    dispatch(setPage(page + 1));
  };
  const hasMore = cardsArray.length < totalCaunt;

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
    <div className={styles.wrapper}>
      <InfiniteScroll
        dataLength={cardsArray.length}
        next={onScroll}
        hasMore={hasMore}
        loader={<LoadingPogination />}
        scrollThreshold={0.9}
      >
        <div className={styles.inner}>
          {!cardsArray || !cardsArray.length ? (
            <NoInfo title={'There are no movies for your request'} />
          ) : (
            cardsArray.map((card, index) => (
              <Card
                card={card}
                key={index}
                images={card.large_cover_image}
                title={card.title}
                genre={card.genres}
                rating={card.rating}
                id={card.id}
              />
            ))
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Main;
