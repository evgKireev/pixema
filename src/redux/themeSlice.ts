import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  valueTheme: boolean;
};

const valueLS = localStorage.getItem('theme');
const valueTheme = valueLS ? JSON.parse(valueLS) : false;

const initialState: initialStateType = {
  valueTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    getValueTheme: (state, actions: PayloadAction<boolean>) => {},
    setValueTheme: (state, actions: PayloadAction<boolean>) => {
      state.valueTheme = actions.payload;
    },
  },
});

export const { getValueTheme, setValueTheme } = themeSlice.actions;
export default themeSlice.reducer;
