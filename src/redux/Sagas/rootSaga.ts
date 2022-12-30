import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import cardsSaga from './cardsSaga';
import themeSaga from './themeSaga';

export function* rootSaga() {
  yield all([cardsSaga(), themeSaga(), authSaga()]);
}

