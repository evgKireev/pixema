import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  valueModalFilter: boolean;
};

const initialState: initialStateType = {
  valueModalFilter: false,
};

const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    setValueModalFilter: (state, actions: PayloadAction<boolean>) => {
      state.valueModalFilter = actions.payload;
    },
  },
});

export const { setValueModalFilter } = otherSlice.actions;
export default otherSlice.reducer;
