import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType, getCardaApi } from '../@types/types/cards';

type initialStateType = {
  cards: CardType[];
  card: CardType | null;
  cardSuggestions: CardType[];
  cardsTrends: CardType[];
  statusCards: string;
  statusCard: string;
  statusCardsTrends: string;
  statusSuggestions: string;
  searchValue: string;
};

const initialState: initialStateType = {
  cards: [],
  card: null,
  cardSuggestions: [],
  cardsTrends: [],
  statusCards: '',
  statusCard: '',
  statusSuggestions: '',
  statusCardsTrends: '',
  searchValue: '',
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getCards: (state, actions: PayloadAction<getCardaApi>) => {},
    getCard: (state, actions: PayloadAction<string | undefined>) => {},
    getCardsTrend: (state, actions: PayloadAction<string | undefined>) => {},
    getSuggestions: (state, actions: PayloadAction<string | undefined>) => {},
    setCards: (state, actions: PayloadAction<CardType[]>) => {
      state.cards = actions.payload;
    },
    setCard: (state, actions: PayloadAction<CardType>) => {
      state.card = actions.payload;
    },
    setCardsTrend: (state, actions: PayloadAction<CardType[]>) => {
      state.cardsTrends = actions.payload;
    },
    setSuggestions: (state, actions: PayloadAction<CardType[]>) => {
      state.cardSuggestions = actions.payload;
    },
    setStatusCards: (state, actions: PayloadAction<string>) => {
      state.statusCards = actions.payload;
    },
    setStatusCardsTrends: (state, actions: PayloadAction<string>) => {
      state.statusCardsTrends = actions.payload;
    },
    setStatusCard: (state, actions: PayloadAction<string>) => {
      state.statusCards = actions.payload;
    },
    setStatusSuggestions: (state, actions: PayloadAction<string>) => {
      state.statusSuggestions = actions.payload;
    },
    setSearchValue: (state, actions: PayloadAction<string>) => {
      state.searchValue = actions.payload;
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
  setSearchValue,
  getCardsTrend,
  setCardsTrend,
  setStatusCardsTrends,
} = cardsSlice.actions;
export default cardsSlice.reducer;
