import axios from 'axios';

const getMovieSearch = async params => {
  const config = {
    url: `/search/movie`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '65573c76cf88d807ccbaf09ca79feb15',
      query: params,
    },
  };

  const response = await axios(config);
  return response.data.results;
};

export default getMovieSearch;
