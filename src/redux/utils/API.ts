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

const fetchGetCardsTrends = (pageTrends: number) => {
  return API.get(
    `v2/list_movies.json?${limitCards}&minimum_rating=8.6&page=${pageTrends}`
  );
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

const getUserMe = (access_token: string, idUser: string) => {
  return API_AUTH.get(
    `user-profile/${idUser}`,
    {},
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
};

export default {
  fetchGetCards,
  fetchGetCard,
  fetchGetSuggestions,
  fetchGetCardsTrends,
  registerUser,
  signInUser,
  getUserMe,
};
