import { Box } from 'components/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-operations';

import css from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Box>
      <div className={css.box}>
        <h2>Please login to continue</h2>

        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={css.full}
            />
          </label>

          <label className={css.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={css.full}
            />
          </label>
          <Link className={css.text} to="/registration">
            Dont have account?
          </Link>
          <button className={css.add} type="submit">
            Go!
          </button>
        </form>
      </div>
    </Box>
  );
}
