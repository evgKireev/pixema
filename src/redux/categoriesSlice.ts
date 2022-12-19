import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  valueCategories: number;
};

const initialState: initialStateType = {
  valueCategories: 0,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setValueCategories: (state, actions) => {
      state.valueCategories = actions.payload;
    },
  },
});

export const { setValueCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
