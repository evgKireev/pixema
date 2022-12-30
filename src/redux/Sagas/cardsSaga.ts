import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GetCardaApi, GetCardsTrendApi } from '../../@types/types/cards';
import {
  getCard,
  getCards,
  getCardsTrend,
  getSuggestions,
  setCard,
  setCards,
  setCardsTrend,
  setPage,
  setStatusCard,
  setStatusCards,
  setStatusCardsTrends,
  setStatusSuggestions,
  setSuggestions,
  seTtotalCaunt,
} from '../cardsSlice';
import API from '../utils/API';

function* getCardsWorker(actions: PayloadAction<GetCardaApi>) {
  const { query_term, sort_by, genre, page, isOverwrite } = actions.payload;
  yield put(setStatusCards('pennding'));
  const { data, ok, problem } = yield call(API.fetchGetCards, {
    query_term,
    sort_by,
    genre,
    page,
    isOverwrite,
  });
  if (ok && data) {
    yield put(setCards({ cards: data.data.movies, isOverwrite }));
    yield put(seTtotalCaunt(data.data.movie_count));
    yield put(setStatusCards('fulfilled'));
  } else {
    console.warn(problem);
    yield put(setStatusCards('rejected'));
  }
}

function* getCardsTrendsWorker(actions: PayloadAction<GetCardsTrendApi>) {
  const { pageTrends } = actions.payload;
  yield put(setStatusCardsTrends('pennding'));
  const { data, ok, problem } = yield call(API.fetchGetCardsTrends, pageTrends);
  if (ok && data) {
    yield put(setCardsTrend(data.data.movies));
    yield put(setStatusCardsTrends('fulfilled'));
  } else {
    console.warn(problem);
    yield put(setStatusCardsTrends('rejected'));
  }
}

function* getCardWorker(action: PayloadAction<string>) {
  yield put(setStatusCard('pennding'));
  const { data, ok, problem } = yield call(API.fetchGetCard, action.payload);
  if (ok && data) {
    yield put(setCard(data.data.movie));
    yield put(setStatusCard('fulfilled'));
  } else {
    console.warn(problem);
    yield put(setStatusCard('rejected'));
  }
}

function* getSuggestionsWorker(action: PayloadAction<string>) {
  yield put(setStatusSuggestions('pennding'));
  const { data, ok, problem } = yield call(
    API.fetchGetSuggestions,
    action.payload
  );
  if (ok && data) {
    yield put(setSuggestions(data.data.movies));
    yield put(setStatusSuggestions('fulfilled'));
  } else {
    console.warn(problem);
    yield put(setStatusSuggestions('rejected'));
  }
}

export default function* cardsSaga() {
  yield all([
    takeLatest(getCards, getCardsWorker),
    takeLatest(getCard, getCardWorker),
    takeLatest(getSuggestions, getSuggestionsWorker),
    takeLatest(getCardsTrend, getCardsTrendsWorker),
  ]);
}
