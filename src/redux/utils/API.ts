import { API } from '../../@types/constant';

const fetchGetCards = () => {
  return API.get('v2/list_movies.json?limit=10');
};

const fetchGetCard = (id: string) => {
  return API.get(`v2/movie_details.json?movie_id=${id}`);
};

const fetchGetSuggestions = (id: string) => {
  return API.get(`v2/movie_suggestions.json?movie_id=${id}`);
};

export default { fetchGetCards, fetchGetCard, fetchGetSuggestions };
