import SearchList from '../../assets/img/Search/SearchList';
import SearchListActive from '../../assets/img/Search/SearchListActive';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  getCards,
  getCardsSearch,
  setSearchValue,
} from '../../redux/cardsSlice';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Search.module.scss';
import { useLocation } from 'react-router-dom';

const Search: React.FC = () => {
  const [inpValue, setInpValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const { valueCategories } = useAppSelector((state) => state.categoriesSlice);
  const { searchValue } = useAppSelector((state) => state.cardsSlice);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  useEffect(() => {
    if (searchValue) {
      dispatch(
        getCardsSearch({
          query_term: searchValue,
        })
      );
    }
    if (pathname !== '/') {
      dispatch(setSearchValue(''));
      setInpValue('');
    }
    if (valueCategories !== 0) {
      setDisabled(true);
      dispatch(setSearchValue(''));
      setInpValue('');
    } else {
      setDisabled(false);
    }
  }, [pathname, disabled, valueCategories, searchValue]);
  return (
    <div className={styles.wrapper}>
      <input
        value={inpValue}
        onChange={(e: any) => {
          if (valueCategories === 0) {
            setInpValue(e.target.value);
            updateSearchValue(e.target.value);
          }
        }}
        placeholder="Search"
        className={classNames(styles.input, {
          [styles.disabled]: disabled,
          [styles.themeWhite]: valueTheme,
        })}
      />
      {inpValue ? (
        <SearchListActive
          className={classNames(styles.svg, {
            [styles.svgThemeWhite]: valueTheme,
          })}
        />
      ) : (
        <SearchList className={styles.svg} />
      )}
    </div>
  );
};

export default Search;
