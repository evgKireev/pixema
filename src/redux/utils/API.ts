import { API, API_AUTH, limitCards } from '../../@types/constant';
import { RegisterUserType, SingInUserType } from '../../@types/types/auth';
import { GetCardaApi } from '../../@types/types/cards';

const fetchGetCards = ({ query_term, sort_by, genre, page }: GetCardaApi) => {
  return API.get(`v2/list_movies.json?${limitCards}&genre=${genre}`, {
    query_term,
    sort_by,
    page,
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

const registerUser = ({
  email,
  password,
  password_confirmation,
  purchase_code,
}: RegisterUserType) => {
  return API_AUTH.post(`/auth/register`, {
    email,
    password,
    password_confirmation,
    purchase_code,
  });
};

const signInUser = ({ email, password, token_name }: SingInUserType) => {
  return API_AUTH.post(`auth/login`, {
    email,
    password,
    token_name,
  });
};

export default {
  fetchGetCards,
  fetchGetCard,
  fetchGetSuggestions,
  fetchGetCardsTrends,
  registerUser,
  signInUser,
};
