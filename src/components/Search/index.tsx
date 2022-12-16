import SearchList from '../../assets/img/Search/SearchList';
import SearchListActive from '../../assets/img/Search/SearchListActive';
import classNames from 'classnames';
import styles from './Search.module.scss';

type SearchType = {
  disabled: boolean;
  filters: boolean;
};
const filters = false;
const disabled = false;
const Search: React.FC<SearchType> = () => {
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Search"
        className={classNames(styles.input, { [styles.disabled]: disabled })}
      />
      {filters ? (
        <SearchListActive className={styles.svg} />
      ) : (
        <SearchList className={styles.svg} />
      )}
    </div>
  );
};

export default Search;
