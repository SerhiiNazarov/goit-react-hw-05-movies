import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import getMovieDetailsById from '../../services/getMovieDetailsById';
import MovieInfo from 'components/MovieInfo';
import InitInfo from 'components/InitInfo';
import { Section, WrapperDetails, LinkBack } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetailsById(movieId)
      .then(response => {
        setMovieDetails(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Section>
        {location.state ? (
          <LinkBack to={backLinkHref}>Go back</LinkBack>
        ) : (
          <LinkBack to="/">Go back</LinkBack>
        )}

        <WrapperDetails>
          {isLoading && <Loader />}
          {error && <p>Oops, some error:{error}</p>}

          {movieDetails && (
            <MovieInfo
              poster_path={poster_path}
              title={title}
              vote_average={vote_average}
              overview={overview}
              genres={genres}
            />
          )}
        </WrapperDetails>
      </Section>
      <Section>
        <InitInfo />
      </Section>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
