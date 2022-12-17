import { create } from 'apisauce';
const API = create({ baseURL: 'https://yts.mx/api' });

const fetchGetCards = () => {
  return API.get('v2/list_movies.json?limit=10');
};

export default { fetchGetCards };
