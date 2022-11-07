import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = e => {
    dispatch(deleteContact(e.target.dataset.id));
  };

  return (
    <ul>
      {contacts?.map(({ id, name, phone }) => {
        return (
          <li className={css.item} key={id}>
            <p>{`${name}: ${phone}`}</p>
            <button
              className={css.btn}
              onClick={handleDeleteContact}
              type="button"
              data-id={id}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
