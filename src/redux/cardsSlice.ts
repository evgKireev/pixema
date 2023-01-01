import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CardsType,
  CardType,
  GetCardaApi,
  GetCardsSearchApi,
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
  statusCardsSearch: string;
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
  statusCardsSearch: '',
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
    getCard: (state, actions: PayloadAction<string | undefined>) => {},
    getCards: (state, actions: PayloadAction<GetCardaApi>) => {},
    getCardsTrend: (state, actions: PayloadAction<GetCardsTrendApi>) => {},
    getSuggestions: (state, actions: PayloadAction<string | undefined>) => {},
    getCardsSearch: (state, actions: PayloadAction<GetCardsSearchApi>) => {},
    setCards: (state, actions: PayloadAction<CardsType>) => {
      const { isOverwrite, cards } = actions.payload;
      state.isOverGlobal = isOverwrite;
      if (isOverwrite) {
        state.cards = [];
        state.cardsFilter = [...state.cardsFilter, ...cards];
      } else {
        state.cards = [...state.cards, ...cards];
      }
    },
    setCardsFilter: (state, actions: PayloadAction<CardType[]>) => {
      state.cardsFilter = actions.payload;
    },

    setCard: (state, actions: PayloadAction<CardType>) => {
      state.card = actions.payload;
    },
    setCardsTrend(state, actions: PayloadAction<CardType[]>) {
      const cardsTrends = actions.payload;
      state.cardsTrends = [...state.cardsTrends, ...cardsTrends];
    },
    setCardsSearch(state, actions: PayloadAction<CardType[]>) {
      if (actions.payload) {
        state.cardsSearch = actions.payload;
      } else {
        state.cardsSearch = [];
      }
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
    setStatusCardsSearch: (state, actions: PayloadAction<string>) => {
      state.statusCardsSearch = actions.payload;
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
  getCardsSearch,
  setCardsSearch,
  setStatusCardsSearch,
  setCardsFilter,
} = cardsSlice.actions;
export default cardsSlice.reducer;
