import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/header';

export const Layout = () => {
  return (
    <>
      <Header />
      {/* The <Outlet> renders the current route selected. */}
      <Outlet />
    </>
  );
};
