import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOKEN_KEY } from '../@types/constant';
import { SignInUserPayload, UserInfoType } from '../@types/types/auth';

type initialStateType = {
  passwordValue: string;
  mailValue: string;
  registered: boolean;
  statusSignIn: string;
  userInfo: UserInfoType | undefined;
};

const initialState: initialStateType = {
  passwordValue: '',
  mailValue: '',
  registered: !!localStorage.getItem(TOKEN_KEY),
  statusSignIn: '',
  userInfo: undefined,
};

const signInAuthSlice = createSlice({
  name: 'signInAuth',
  initialState,
  reducers: {
    getSignInUser: (state, actions: PayloadAction<SignInUserPayload>) => {},
    getUser: (state, actions: PayloadAction<undefined>) => {},
    setPasswordValue: (state, actions: PayloadAction<string>) => {
      state.passwordValue = actions.payload;
    },
    setMailValue: (state, actions: PayloadAction<string>) => {
      state.mailValue = actions.payload;
    },
    setRegistered: (state, actions: PayloadAction<boolean>) => {
      state.registered = actions.payload;
    },
    logoutUser: (state, actions: PayloadAction<undefined>) => {},
    setStatusSignIn: (state, actions: PayloadAction<string>) => {
      state.statusSignIn = actions.payload;
    },
    setUserInfo: (state, actions: PayloadAction<UserInfoType>) => {
      state.userInfo = actions.payload;
    },
  },
});

export const {
  setPasswordValue,
  setMailValue,
  getSignInUser,
  setRegistered,
  logoutUser,
  setStatusSignIn,
  getUser,
  setUserInfo,
} = signInAuthSlice.actions;
export default signInAuthSlice.reducer;
