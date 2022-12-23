import axios from 'axios';

const getMovieDetailsById = async movieId => {
  const config = {
    url: `/movie/${movieId}`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: '65573c76cf88d807ccbaf09ca79feb15',
    },
  };

  const response = await axios(config);
  return response.data;
};

export default getMovieDetailsById;
