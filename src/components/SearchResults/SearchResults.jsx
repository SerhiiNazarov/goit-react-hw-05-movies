import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Title, SearchList, SearchItem } from './SearchResults.styled';

const SearchResults = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <Title>Search results</Title>
      <SearchList>
        {movies.map(movie => (
          <SearchItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </SearchItem>
        ))}
      </SearchList>
    </>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
