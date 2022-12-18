import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getCard,
  getCards,
  getSuggestions,
  setCard,
  setCards,
  setStatusCard,
  setStatusCards,
  setStatusSuggestions,
  setSuggestions,
} from '../cardsSlice';
import API from '../utils/API';

function* getCardsWorker() {
  yield put(setStatusCards('pennding'));
  const { data, ok, problem, status } = yield call(API.fetchGetCards);
  if (ok && data) {
    yield put(setCards(data.data.movies));
    yield put(setStatusCards('fulfilled'));
  } else {
    console.warn(problem);
    yield put(setStatusCards('rejected'));
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
  ]);
}
