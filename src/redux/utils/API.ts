import { API, limitCards } from '../../@types/constant';
import { getCardaApi } from '../../@types/types/cards';

const fetchGetCards = ({ query_term, sort_by, genre }: getCardaApi) => {
  return API.get(`v2/list_movies.json?${limitCards}&genre=${genre}`, {
    query_term,
    sort_by,
  });
};

const fetchGetCardsTrends = () => {
  return API.get(`v2/list_movies.json?minimum_rating=8.6`);
};

const fetchGetCard = (id: string) => {
  return API.get(`v2/movie_details.json?movie_id=${id}`);
};

const fetchGetSuggestions = (id: string) => {
  return API.get(`v2/movie_suggestions.json?movie_id=${id}`);
};

export default {
  fetchGetCards,
  fetchGetCard,
  fetchGetSuggestions,
  fetchGetCardsTrends,
};
