import { all } from 'redux-saga/effects';
import cardsSaga from './cardsSaga';

export function* rootSaga() {
  yield all([cardsSaga()]);
}
