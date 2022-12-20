import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, takeLatest } from 'redux-saga/effects';
import { getValueTheme, setValueTheme } from '../themeSlice';

function* getValueThemeWorker(actions: PayloadAction<boolean>) {
  const value = actions.payload;
  localStorage.setItem('theme', JSON.stringify(value));
  const getValueLS = localStorage.getItem('theme');
  const valueTheme = getValueLS ? JSON.parse(getValueLS) : false;
  yield put(setValueTheme(!valueTheme));
}

export default function* themeSaga() {
  yield all([takeLatest(getValueTheme, getValueThemeWorker)]);
}
