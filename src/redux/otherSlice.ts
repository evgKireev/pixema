import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  valueModalFilter: boolean;
  valueBuregrMenu: boolean;
};

const initialState: initialStateType = {
  valueModalFilter: false,
  valueBuregrMenu: false,
};

const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    setValueModalFilter: (state, actions: PayloadAction<boolean>) => {
      state.valueModalFilter = actions.payload;
    },
    setValueBuregrMenu: (state, actions: PayloadAction<boolean>) => {
      state.valueBuregrMenu = actions.payload;
    },
  },
});

export const { setValueModalFilter, setValueBuregrMenu } = otherSlice.actions;
export default otherSlice.reducer;
