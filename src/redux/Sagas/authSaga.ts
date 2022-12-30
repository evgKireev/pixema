import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { TOKEN_KEY } from '../../@types/constant';
import { toast } from 'react-toastify';
import {
  RegisterUserPayload,
  SignInUserPayload,
} from '../../@types/types/auth';
import {
  getSignInUser,
  logoutUser,
  setRegistered,
  setStatusSignIn,
} from '../signInAuthSlice';
import { getRegisterUser, setStatusRegisterUser } from '../signUpAuthSlice';
import API from './/../utils/API';

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {
  yield put(setStatusRegisterUser('pending'));
  const { datas, callback } = action.payload;
  const { email, password, password_confirmation, purchase_code } = datas;
  const { data, ok, problem } = yield call(API.registerUser, {
    email,
    password,
    password_confirmation,
    purchase_code,
  });
  if (ok && data) {
    yield put(setStatusRegisterUser('fulfild'));
    localStorage.setItem(TOKEN_KEY, data.bootstrapData);
    callback();
    toast.success('Registration was successful!');
  } else {
    toast.error('Error while registering');
  }
}

function* signInUserWorker(action: PayloadAction<SignInUserPayload>) {
  yield put(setStatusSignIn('pending'));
  const { datas, callback } = action.payload;
  const { email, password, token_name } = datas;
  const { data, ok, problem } = yield call(API.signInUser, {
    email,
    password,
    token_name,
  });
  if (ok && data) {
    yield put(setStatusSignIn('fullfild'));
    localStorage.setItem(TOKEN_KEY, data.user.access_token);
    yield put(setRegistered(true));
    callback();
    toast.success('Signed in!');
  } else {
    toast.error('Error while sign in: ', problem);
  }
}

function* logoutUserWorker() {
  yield put(setRegistered(false));
  localStorage.removeItem(TOKEN_KEY);
}

export default function* authSaga() {
  yield all([takeLatest(getRegisterUser, registerUserWorker)]);
  yield all([takeLatest(getSignInUser, signInUserWorker)]);
  yield all([takeLatest(logoutUser, logoutUserWorker)]);
}
