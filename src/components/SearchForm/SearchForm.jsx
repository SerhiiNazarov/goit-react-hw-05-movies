import { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from './SearchForm.styled';

const SearchForm = ({ setSearchParams }) => {
  const [movieInput, setMovieInput] = useState('');

  const onInputChange = e => {
    const { value } = e.target;
    setMovieInput(value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams(movieInput !== '' ? { query: movieInput.trim() } : {});
    setMovieInput('');
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <Input
          onChange={onInputChange}
          type="text"
          name="searchInput"
          value={movieInput}
          placeholder="Enter movie name"
        />
        <Button>Search</Button>
      </form>
    </>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};
