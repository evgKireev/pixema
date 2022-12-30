import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CardsTrendType,
  CardsType,
  CardType,
  GetCardaApi,
  GetCardsTrendApi,
} from '../@types/types/cards';
import { getCartLS } from './utils/getCardsFavoritesLS';

type initialStateType = {
  cards: CardType[];
  card: CardType | null;
  cardSuggestions: CardType[];
  cardsTrends: CardType[];
  cardsFavorites: CardType[];
  cardsFilter: CardType[];
  cardsSearch: CardType[];
  statusCards: string;
  statusCard: string;
  statusCardsTrends: string;
  statusSuggestions: string;
  searchValue: string;
  page: number;
  pageTrends: number;
  isOverGlobal: boolean;
  totalCaunt: number;
};

const { cardsFavorites } = getCartLS();
const initialState: initialStateType = {
  cards: [],
  card: null,
  cardSuggestions: [],
  cardsTrends: [],
  cardsFilter: [],
  cardsSearch: [],
  cardsFavorites,
  statusCards: '',
  statusCard: '',
  statusSuggestions: '',
  statusCardsTrends: '',
  searchValue: '',
  page: 1,
  pageTrends: 1,
  isOverGlobal: false,
  totalCaunt: 0,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getCards: (state, actions: PayloadAction<GetCardaApi>) => {},
    getCard: (state, actions: PayloadAction<string | undefined>) => {},
    getCardsTrend: (state, actions: PayloadAction<GetCardsTrendApi>) => {},
    getSuggestions: (state, actions: PayloadAction<string | undefined>) => {},
    setCards: (state, actions: PayloadAction<CardsType>) => {
      const { isOverwrite, cards } = actions.payload;
      state.isOverGlobal = isOverwrite;
      if (isOverwrite) {
        state.cardsFilter = [...state.cardsFilter, ...cards];
      } else {
        state.cards = [...state.cards, ...cards];
      }
    },
    setCard: (state, actions: PayloadAction<CardType>) => {
      state.card = actions.payload;
    },
    setCardsTrend(state, actions: PayloadAction<CardType[]>) {
      const cardsTrends = actions.payload;
      state.cardsTrends = [...state.cardsTrends, ...cardsTrends];
      console.log(state.cardsTrends);
    },
    setSuggestions: (state, actions: PayloadAction<CardType[]>) => {
      state.cardSuggestions = actions.payload;
    },
    setCardsFavorites: (state, actions: PayloadAction<CardType>) => {
      const card = actions.payload;
      const cardsFavoritesIndex = state.cardsFavorites.findIndex(
        (value) => value.id === card.id
      );
      if (cardsFavoritesIndex === -1) {
        state.cardsFavorites.push(card);
      } else {
        state.cardsFavorites.splice(cardsFavoritesIndex);
      }
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
    setPage: (state, actions: PayloadAction<number>) => {
      state.page = actions.payload;
    },
    setPageTrends: (state, actions: PayloadAction<number>) => {
      state.pageTrends = actions.payload;
    },
    seTtotalCaunt: (state, actions: PayloadAction<number>) => {
      state.totalCaunt = actions.payload;
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
  setCardsFavorites,
  setPage,
  setPageTrends,
  seTtotalCaunt,
} = cardsSlice.actions;
export default cardsSlice.reducer;
