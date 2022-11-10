import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { getToken } from 'redux/selectors';

import { Header } from './Header';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Home = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
    }
    return;
  }, [dispatch, token]);

  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>

            <Route path="/" element={<PublicRoute />}>
              <Route path="/registration" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
