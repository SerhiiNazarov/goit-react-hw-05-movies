// import { notFoundImg } from 'links/imgNotFound';
import { CastList, CastItem, CastText } from './MovieCast.styled';
import imageNotFaund from '../../images/imgNotFound.jpg';

const MovieCast = ({ credits }) => {
  return (
    <>
      <CastList>
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <img
                  src={
                    profile_path === null
                      ? imageNotFaund
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                />
                <CastText>{name}</CastText>
                <CastText>Character: {character}</CastText>
              </CastItem>
            );
          })}
      </CastList>
    </>
  );
};
export default MovieCast;
