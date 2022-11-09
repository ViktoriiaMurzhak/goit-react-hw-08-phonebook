import UserMenu from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { Box } from '../Box';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export const Header = () => {
  const activeClassName = ({ isActive }) =>
    isActive ? `${css.active}` : `${css.navLink}`;
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={css.header}>
      <Box>
        <div className={css.box}>
          <nav className={css.nav}>
            <ul className={css.page}>
              <li>
                <NavLink className={activeClassName} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={activeClassName} to="/contacts">
                  Contacts
                </NavLink>
              </li>
            </ul>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <ul className={css.log}>
                <li>
                  <NavLink to="/registration" className={activeClassName}>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className={activeClassName}>
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </Box>
    </header>
  );
};
