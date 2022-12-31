import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Card';
import NoInfo from '../NoInfo';
import styles from './Main.module.scss';
import LoadingPogination from '../LoadingPagination';
import Loader from '../Loader';
import {
  getCards,
  getCardsTrend,
  setPage,
  setPageTrends,
} from '../../redux/cardsSlice';

const Main = () => {
  const { isOverGlobal } = useAppSelector((state) => state.cardsSlice);
  const { cardsTrends } = useAppSelector((state) => state.cardsSlice);
  const { statusCards } = useAppSelector((state) => state.cardsSlice);
  const { statusCardsSearch } = useAppSelector((state) => state.cardsSlice);
  const { valueCategories } = useAppSelector((state) => state.categoriesSlice);
  const { cardsFavorites } = useAppSelector((state) => state.cardsSlice);
  const { valueTabs } = useAppSelector((state) => state.filtersSlice);
  const { selectGenre } = useAppSelector((state) => state.filtersSlice);
  const { page } = useAppSelector((state) => state.cardsSlice);
  const { pageTrends } = useAppSelector((state) => state.cardsSlice);
  const { cards } = useAppSelector((state) => state.cardsSlice);
  const { cardsFilter } = useAppSelector((state) => state.cardsSlice);
  const { cardsSearch } = useAppSelector((state) => state.cardsSlice);
  const { totalCaunt } = useAppSelector((state) => state.cardsSlice);
  const { searchValue } = useAppSelector((state) => state.cardsSlice);
  const genreString = selectGenre.join('&');

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (valueCategories === 0) {
      if (!isOverGlobal) {
        dispatch(
          getCards({
            query_term: '',
            sort_by: '',
            genre: '',
            page,
            isOverwrite: false,
          })
        );
      } else {
        dispatch(
          getCards({
            query_term: '',
            sort_by: valueTabs,
            genre: genreString,
            page,
            isOverwrite: true,
          })
        );
      }
    }
    if (valueCategories === 1) {
      dispatch(getCardsTrend({ pageTrends }));
    }
    localStorage.setItem('cart', JSON.stringify(cardsFavorites));
  }, [page, valueTabs, genreString, pageTrends, valueCategories]);
  const getCardsCheck = () => {
    if (valueCategories === 1) {
      return cardsTrends;
    } else if (valueCategories === 2) {
      return cardsFavorites;
    } else {
      if (isOverGlobal) {
        return cardsFilter;
      } else {
        if (searchValue) {
          return cardsSearch;
        } else {
          return cards;
        }
      }
    }
  };
  const cardsArray = getCardsCheck();
  const onScroll = () => {
    if (valueCategories === 1) {
      dispatch(setPageTrends(pageTrends + 1));
    } else if (valueCategories === 0) {
      dispatch(setPage(page + 1));
    }
  };
  const hasMore = () => {
    if (valueCategories === 2 || cardsArray.length === 0 || searchValue) {
      return false;
    } else {
      return cardsArray.length < totalCaunt;
    }
  };

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

  if (statusCardsSearch === 'pennding') {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <InfiniteScroll
        dataLength={cardsArray.length}
        next={onScroll}
        hasMore={hasMore()}
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
