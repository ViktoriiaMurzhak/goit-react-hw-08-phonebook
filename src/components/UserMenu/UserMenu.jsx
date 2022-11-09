import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getUsername } from 'redux/selectors';
import defaultAvatar from '../../img/defaultavatar.png';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={css.box}>
      <img className={css.avatar} src={avatar} alt="avatar" />
      <div className={css.miniBox}>
        <span className={css.name}>Welcome, {name}!</span>
        <button
          className={css.exit}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Exit
        </button>
      </div>
    </div>
  );
}
