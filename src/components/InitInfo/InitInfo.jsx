import { Link, useLocation } from 'react-router-dom';
import { InitTitle, InitList, InitItem } from './InitInfo.styled';

const InitInfo = () => {
  const location = useLocation();

  return (
    <>
      <InitTitle>Init information</InitTitle>
      <InitList>
        <InitItem>
          <Link to="cast" state={{ from: location.state?.from } ?? '/'}>
            Cast
          </Link>
        </InitItem>
        <InitItem>
          <Link to="reviews" state={{ from: location.state?.from } ?? '/'}>
            Reviews
          </Link>
        </InitItem>
      </InitList>
    </>
  );
};

export default InitInfo;
