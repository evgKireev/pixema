import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../@types/types/cards';

type initialStateType = {
  cards: CardType[];
  card: CardType | null;
  cardSuggestions: CardType[];
  statusCards: string;
  statusCard: string;
  statusSuggestions: string;
};

const initialState: initialStateType = {
  cards: [],
  card: null,
  cardSuggestions: [],
  statusCards: '',
  statusCard: '',
  statusSuggestions: '',
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getCards: (state, actions: PayloadAction<undefined>) => {},
    getCard: (state, actions: PayloadAction<string | undefined>) => {},
    getSuggestions: (state, actions: PayloadAction<string | undefined>) => {},
    setCards: (state, actions: PayloadAction<CardType[]>) => {
      state.cards = actions.payload;
    },
    setCard: (state, actions: PayloadAction<CardType>) => {
      state.card = actions.payload;
    },
    setSuggestions: (state, actions: PayloadAction<CardType[]>) => {
      state.cardSuggestions = actions.payload;
    },
    setStatusCards: (state, actions: PayloadAction<string>) => {
      state.statusCards = actions.payload;
    },
    setStatusCard: (state, actions: PayloadAction<string>) => {
      state.statusCards = actions.payload;
    },
    setStatusSuggestions: (state, actions: PayloadAction<string>) => {
      state.statusSuggestions = actions.payload;
    },
  },
});
export const {
  getCards,
  setCards,
  getCard,
  setCard,
  getSuggestions,
  setSuggestions,
  setStatusCards,
  setStatusCard,
  setStatusSuggestions,
} = cardsSlice.actions;
export default cardsSlice.reducer;
