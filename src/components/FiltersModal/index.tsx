import classNames from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';
import Button, { ButtonTypeEnum } from '../Button';
import { IoIosClose, IoMdClose } from 'react-icons/io';
import styles from './FilterModal.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setValueModalFilter } from '../../redux/otherSlice';
import {
  setInputValue,
  setSelectGenre,
  setUserGenre,
  setValueTabs,
} from '../../redux/filtersSlice';
import {
  getCards,
  setCardsFilter,
  setCardsRender,
  setPage,
} from '../../redux/cardsSlice';

type FilterModalType = {
  refSvg: { current: null };
};

const FilterModal: React.FC<FilterModalType> = ({ refSvg }) => {
  const [activGenre, setActivGenre] = React.useState<number | null>(null);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [check, setCheck] = React.useState<boolean>(false);
  const { valueModalFilter } = useAppSelector((state) => state.otherSlice);
  const { valueTabs } = useAppSelector((state) => state.filtersSlice);
  const { inputValue } = useAppSelector((state) => state.filtersSlice);
  const { selectGenre } = useAppSelector((state) => state.filtersSlice);
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const { page } = useAppSelector((state) => state.cardsSlice);
  const [disabled, setDisabled] = useState(false);
  const modalFilter = useRef(null);
  const dispatch = useAppDispatch();
  const genreString = selectGenre.join('&');

  useEffect(() => {
    const eventModalFilter = (e: MouseEvent) => {
      const _e = e as MouseEvent & {
        path: null[];
      };
      if (
        !_e.path.includes(refSvg.current) &&
        !_e.path.includes(modalFilter.current)
      ) {
        dispatch(setValueModalFilter(false));
      }
    };
    document.body.addEventListener('click', eventModalFilter);
    return () => {
      document.body.removeEventListener('click', eventModalFilter);
    };
  }, []);
  const arrow = openModal ? (
    <MdKeyboardArrowUp
      className={styles.arrow}
      onClick={() => setOpenModal(!openModal)}
    />
  ) : (
    <MdKeyboardArrowDown
      className={styles.arrow}
      onClick={() => setOpenModal(!openModal)}
    />
  );
  const genre = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    ' Film Noir',
    'History	',
    'Horror',
    ' Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Short Film',
    'Sport',
    'Superhero',
    'Thriller',
    'War',
    'Western',
  ];

  return (
    <div
      ref={modalFilter}
      className={classNames(styles.inner, {
        [styles.activeInner]: valueModalFilter,
        [styles.themeFilters]: valueTheme,
      })}
    >
      <h2>Filters</h2>
      <IoMdClose
        className={styles.close}
        onClick={() => dispatch(setValueModalFilter(false))}
      />
      <div
        className={classNames(styles.sort, { [styles.sortTheme]: valueTheme })}
      >
        <div>Sort by</div>
        <div className={styles.innerSort}>
          <div
            onClick={() => dispatch(setValueTabs('rating'))}
            className={classNames(
              styles.buttonLeft,
              valueTabs === 'rating' ? styles.buttonActive : '',
              {
                [styles.buttonTheme]: valueTheme,
                [styles.buttonActivetTheme]:
                  valueTabs === 'rating' && valueTheme,
              }
            )}
          >
            Rating
          </div>
          <div
            onClick={() => dispatch(setValueTabs('year'))}
            className={classNames(
              styles.buttonRigth,
              valueTabs === 'year' ? styles.buttonActive : '',

              {
                [styles.buttonTheme]: valueTheme,
                [styles.buttonActivetTheme]: valueTabs === 'year' && valueTheme,
              }
            )}
          >
            Year
          </div>
        </div>
        <div className={styles.innerSort}>
          <div
            onClick={() => dispatch(setValueTabs('like_count'))}
            className={classNames(
              styles.buttonLeft,
              valueTabs === 'like_count' ? styles.buttonActive : '',
              {
                [styles.buttonTheme]: valueTheme,
                [styles.buttonActivetTheme]:
                  valueTabs === 'like_count' && valueTheme,
              }
            )}
          >
            Like count
          </div>
          <div
            onClick={() => dispatch(setValueTabs('date_added'))}
            className={classNames(styles.buttonRigth, {
              [styles.buttonTheme]: valueTheme,
              [styles.buttonActive]: valueTabs === 'date_added',

              [styles.buttonActivetTheme]:
                valueTabs === 'date_added' && valueTheme,
            })}
          >
            Date added
          </div>
        </div>
      </div>
      <div className={styles.search}>
        <div>Full or short movie name</div>
        <input
          value={inputValue}
          onChange={(e) => dispatch(setInputValue(e.target.value))}
          placeholder="Your text"
          className={classNames(styles.input, {
            [styles.InputTheme]: valueTheme,
          })}
        ></input>
      </div>
      <div className={styles.genre}>
        <div>Genre</div>
        <div
          onClick={() => setOpenModal(!openModal)}
          className={classNames(styles.choose, {
            [styles.InputTheme]: valueTheme,
          })}
        >
          <div>Choose genre</div>
          {arrow}
        </div>
        <div
          className={classNames(styles.userActiveInner, {
            [styles.blockModal]: openModal,
          })}
        >
          <ul
            className={classNames(styles.list, {
              [styles.listActive]: !openModal,
              [styles.InputTheme]: valueTheme,
            })}
          >
            {genre.map((value, index) => (
              <li
                onClick={() => {
                  setActivGenre(index);
                  setOpenModal(false);
                  dispatch(setSelectGenre(value));
                }}
                className={classNames(styles.item, {
                  [styles.active]: activGenre === index,
                })}
                key={index}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={classNames(styles.selectGenre, {
          [styles.InputTheme]: valueTheme,
        })}
      >
        {selectGenre.map((value, index) => (
          <div
            className={classNames(styles.genreSel, {
              [styles.InputTheme]: valueTheme,
            })}
            key={index}
          >
            {value}
            <IoIosClose
              className={styles.closeSvg}
              onClick={() => dispatch(setUserGenre(value))}
            />
          </div>
        ))}
      </div>
      <div className={styles.innerCheck}>
        <div onClick={() => setCheck(!check)} className={styles.btnCheck}>
          {check ? <AiOutlineCheck /> : null}
        </div>
        <div>Rotten Tomatoes rating included</div>
      </div>
      <div className={styles.btn}>
        <Button
          title={'Clear filter'}
          type={ButtonTypeEnum.Secondary}
          onClick={() => {
            dispatch(setValueTabs('date_added'));
            dispatch(setInputValue(''));
            dispatch(setUserGenre(''));
            dispatch(setCardsFilter([]));
            dispatch(setCardsRender([]));

            setDisabled(false);
            dispatch(
              getCards({
                query_term: '',
                sort_by: '',
                genre: '',
                page,
                isOverwrite: false,
              })
            );
          }}
          disabled={false}
          className={classNames(styles.btnFilter, {
            [styles.buttonActivetTheme]: valueTheme,
          })}
        />
        <Button
          title={'Show results'}
          type={ButtonTypeEnum.Primary}
          onClick={() => {
            dispatch(
              getCards({
                query_term: inputValue,
                sort_by: valueTabs,
                genre: genreString,
                page,
                isOverwrite: true,
              })
            );
            dispatch(setPage(1));
            setDisabled(true);
          }}
          disabled={disabled}
          className={styles.btnFilter}
        />
      </div>
    </div>
  );
};

export default FilterModal;
