import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  valueTabs: string;
  inputValue: string;
  userGenre: string;
  selectGenre: string[];
};

const initialState: initialStateType = {
  valueTabs: 'year',
  inputValue: '',
  userGenre: '',
  selectGenre: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setValueTabs: (state, actions: PayloadAction<string>) => {
      state.valueTabs = actions.payload;
    },
    setInputValue: (state, actions: PayloadAction<string>) => {
      state.inputValue = actions.payload;
    },

    setSelectGenre: (state, actions: PayloadAction<string>) => {
      const genre = actions.payload;
      if (!state.selectGenre.some((el) => el === genre)) {
        state.selectGenre.push(genre);
      }
    },
    setUserGenre: (state, actions: PayloadAction<string>) => {
      const genre = actions.payload;
      if (genre === '') {
        state.selectGenre = [];
      }
      const indexGenre = state.selectGenre.findIndex(
        (value) => value === genre
      );
      state.selectGenre.splice(indexGenre, 1);
    },
  },
});

export const {
  setValueTabs,
  setInputValue,
  setUserGenre,
  setSelectGenre,
} = filtersSlice.actions;
export default filtersSlice.reducer;
