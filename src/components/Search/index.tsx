import SearchList from '../../assets/img/Search/SearchList';
import SearchListActive from '../../assets/img/Search/SearchListActive';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearchValue } from '../../redux/cardsSlice';
import debounce from 'lodash.debounce';
import { useCallback, useState } from 'react';
import classNames from 'classnames';
import styles from './Search.module.scss';

const disabled = false;
const Search: React.FC = () => {
  const [inpValue, setInpValue] = useState('');
  const dispatch = useAppDispatch();
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  return (
    <div className={styles.wrapper}>
      <input
        value={inpValue}
        onChange={(e: any) => {
          setInpValue(e.target.value);
          updateSearchValue(e.target.value);
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
