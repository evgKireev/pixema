import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../@types/types/cards';

type initialStateType = {
  cards: CardType[];
};

const initialState: initialStateType = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getCards: (state, actions: PayloadAction<undefined>) => {},
    setCards: (state, actions: PayloadAction<CardType[]>) => {
      state.cards = actions.payload;
    },
  },
});
export const { getCards, setCards } = cardsSlice.actions;
export default cardsSlice.reducer;
