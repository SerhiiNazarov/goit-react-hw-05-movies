import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieItem } from './TrendingMovies.styled';

const TrendingMovies = ({ trending }) => {
  return (
    <>
      {trending.map(movie => (
        <MovieItem key={movie.id}>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </MovieItem>
      ))}
    </>
  );
};

export default TrendingMovies;

TrendingMovies.propTypes = {
  trending: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
