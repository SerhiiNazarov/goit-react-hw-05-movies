import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import getTrandingAPI from 'services/getTrandingAPI';
import { Section, Title, MoviesList } from './Home.styled';
import TrendingMovies from 'components/TrendingMovies';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTrandingAPI()
      .then(response => {
        setTrending(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {error && <p>Oops, some error:{error}</p>}

      <Section>
        <Title>Trending today</Title>
        <MoviesList>
          {trending && <TrendingMovies trending={trending} />}
        </MoviesList>
      </Section>

      {isLoading && <Loader />}
    </>
  );
};

export default Home;
