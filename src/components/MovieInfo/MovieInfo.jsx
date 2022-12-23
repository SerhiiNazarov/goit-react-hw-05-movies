import imageNotFaund from '../../images/imgNotFound.jpg';
import PropTypes from 'prop-types';
import {
  InfoList,
  Title,
  Rating,
  SecondaryTitle,
  Text,
  Genres,
} from './MovieInfo.styled';

const MovieInfo = ({ poster_path, title, vote_average, overview, genres }) => {
  return (
    <>
      <img
        src={
          poster_path === null
            ? imageNotFaund
            : `https://image.tmdb.org/t/p/w500/${poster_path}`
        }
        alt={title}
        width="300"
      />

      <InfoList>
        <Title>{title}</Title>
        <Rating>Rating: {Math.round(vote_average * 10)}%</Rating>
        <SecondaryTitle>Overview</SecondaryTitle>
        <Text>{overview}</Text>
        <SecondaryTitle>Genres</SecondaryTitle>
        <Genres>
          {genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </Genres>
      </InfoList>
    </>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.shape),
};
