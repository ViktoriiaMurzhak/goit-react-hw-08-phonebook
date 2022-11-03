import myContacts from '../../data/contacts.json';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsAction } from '../../redux/store';
import { useEffect } from 'react';

export const ContactList = () => {
  const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const CONTACTS_LIST_LOCAL_KEY = 'contacts-list';
    localStorage.setItem(CONTACTS_LIST_LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = e => {
    dispatch(deleteContactsAction(e.target.dataset.id));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <p>{`${name}: ${number}`}</p>
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

// export const ContactList = ({ contacts, handleDeleteContact }) => {
//   return (
//     <ul>
//       {contacts.map(({ id, name, number }) => {
//         return (
//           <li className={css.item} key={id}>
//             <p>{`${name}: ${number}`}</p>
//             <button
//               className={css.btn}
//               onClick={() => handleDeleteContact(id)}
//               type="button"
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

export function getContacts() {
  const CONTACTS_LIST_LOCAL_KEY = 'contacts-list';
  const localContactsList = localStorage.getItem(CONTACTS_LIST_LOCAL_KEY);
  const parsedlocalContactsList = JSON.parse(localContactsList);

  if (parsedlocalContactsList?.length > 0) {
    return JSON.parse(localContactsList);
  } else {
    return myContacts;
  }
}
