import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ID_KEY, TOKEN_KEY } from '../../@types/constant';
import { toast } from 'react-toastify';
import {
  RegisterUserPayload,
  SignInUserPayload,
} from '../../@types/types/auth';
import {
  getSignInUser,
  getUser,
  logoutUser,
  setRegistered,
  setStatusSignIn,
  setUserInfo,
} from '../signInAuthSlice';
import { getRegisterUser, setStatusRegisterUser } from '../signUpAuthSlice';
import API from './/../utils/API';

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {
  yield put(setStatusRegisterUser('pending'));
  const { datas, callback } = action.payload;
  const { email, password, password_confirmation, purchase_code } = datas;
  const { data, ok } = yield call(API.registerUser, {
    email,
    password,
    password_confirmation,
    purchase_code,
  });
  if (ok && data) {
    yield put(setStatusRegisterUser('fulfild'));
    localStorage.setItem(TOKEN_KEY, data.bootstrapData);
    callback('/signin');
    toast.success('Registration was successful!');
  } else {
    yield put(setStatusRegisterUser('rejected'));
    toast.error(
      data.errors.email ? `${data.message}(${data.errors.email[0]})` : null
    );
    toast.error(
      data.errors.password
        ? `${data.message}(${data.errors.password[0]})`
        : null
    );
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
    localStorage.setItem(ID_KEY, data.user.id);
    yield put(setRegistered(true));
    callback();
    toast.success('Signed in!');
  } else {
    yield put(setStatusSignIn('rejected'));
    toast.error(
      data.errors.email ? `${data.message}(${data.errors.email[0]})` : null
    );
    toast.error(
      data.errors.password
        ? `${data.message}(${data.errors.password[0]})`
        : null
    );
  }
}

function* logoutUserWorker() {
  yield put(setRegistered(false));
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ID_KEY);
}

function* getUserMeWorker() {
  const access_token = localStorage.getItem(TOKEN_KEY) || '';
  const idUser = localStorage.getItem(ID_KEY) || '';
  const { data, ok } = yield call(API.getUserMe, access_token, idUser);
  if (ok && data) {
    yield put(
      setUserInfo({ mail: data.user.email, name: data.user.display_name })
    );
  } else {
    toast.error('Error while getting user info');
  }
}

export default function* authSaga() {
  yield all([takeLatest(getRegisterUser, registerUserWorker)]);
  yield all([takeLatest(getSignInUser, signInUserWorker)]);
  yield all([takeLatest(logoutUser, logoutUserWorker)]);
  yield all([takeLatest(getUser, getUserMeWorker)]);
}
