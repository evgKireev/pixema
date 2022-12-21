import SearchList from '../../assets/img/Search/SearchList';
import SearchListActive from '../../assets/img/Search/SearchListActive';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearchValue } from '../../redux/cardsSlice';
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
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );
  useEffect(() => {
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
  }, [pathname, disabled, valueCategories]);
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
function setInputSearch(str: any): any {
  throw new Error('Function not implemented.');
}
