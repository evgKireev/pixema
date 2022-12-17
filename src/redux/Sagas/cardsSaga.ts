import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getCards, setCards } from '../cardsSlice';
import API from '../utils/API';

function* getCardsWorker() {
  const { data, ok, problem, status } = yield call(API.fetchGetCards);
  if (ok && data) {
    yield put(setCards(data.data.movies));
  } else {
    console.warn(problem);
  }
}

export default function* cardsSaga() {
  yield all([takeLatest(getCards, getCardsWorker)]);
}
