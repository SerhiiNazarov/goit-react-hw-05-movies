import axios from 'axios';

const config = {
  url: '/trending/movie/week',
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b8cf5afe2d121f78b312818c5895b2ff',
  },
};

const getTrandingAPI = async () => {
  const response = await axios(config);
  return response.data.results;
};

export default getTrandingAPI;
