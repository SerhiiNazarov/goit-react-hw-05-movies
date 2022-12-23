import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Navigation } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movies"> Movies</Link>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
