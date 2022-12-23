import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieCast from 'components/MovieCast';
import Loader from 'components/Loader';
import getMovieCredits from 'services/getMovieCredits';

import { Section } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieCredits(movieId)
      .then(response => {
        setCredits(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, some error:{error}</p>}
      <Section>
        <MovieCast credits={credits} />
      </Section>
    </>
  );
};

export default Cast;
