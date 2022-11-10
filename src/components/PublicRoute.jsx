import { getToken } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(getToken);

  return token ? <Navigate to="/" /> : <Outlet />;
};
