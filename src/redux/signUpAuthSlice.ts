import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterUserPayload } from '../@types/types/auth';

type initialStateType = {
  passwordValue: string;
  mailValue: string;
  passworConfirmdValue: string;
  nameUser: string;
  statusRegisterUser: string;
};

const initialState: initialStateType = {
  passwordValue: '',
  mailValue: '',
  passworConfirmdValue: '',
  nameUser: '',
  statusRegisterUser: '',
};

const signUpAuthSlice = createSlice({
  name: 'signUpAuth',
  initialState,
  reducers: {
    getRegisterUser: (state, actions: PayloadAction<RegisterUserPayload>) => {},
    setPasswordValue: (state, actions: PayloadAction<string>) => {
      state.passwordValue = actions.payload;
    },
    setMailValue: (state, actions: PayloadAction<string>) => {
      state.mailValue = actions.payload;
    },
    setPassworConfirmdValue: (state, actions: PayloadAction<string>) => {
      state.passworConfirmdValue = actions.payload;
    },
    setNameUser: (state, actions: PayloadAction<string>) => {
      state.nameUser = actions.payload;
    },
    setStatusRegisterUser: (state, actions: PayloadAction<string>) => {
      state.statusRegisterUser = actions.payload;
    },
  },
});

export const {
  setPasswordValue,
  setMailValue,
  setPassworConfirmdValue,
  setNameUser,
  getRegisterUser,
  setStatusRegisterUser
} = signUpAuthSlice.actions;
export default signUpAuthSlice.reducer;
