import { getContacts } from '../components/ContactList/ContactList';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initialState = {
  contacts: getContacts(),
  filter: '',
};

const exhaust = composeWithDevTools(applyMiddleware());

export const deleteContactsAction = payload => {
  return { type: 'contacts/deleteContacts', payload };
};

export const filterContactsAction = payload => {
  return { type: 'contacts/filterContacts', payload };
};

export const addContactsAction = payload => {
  return { type: 'contacts/addContacts', payload };
};

function contactsReducer(state = initialState, action) {
  console.log('action', action);

  switch (action.type) {
    case 'contacts/deleteContacts':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id != action.payload
        ),
      };

    case 'contacts/filterContacts':
      console.log('action', action);
      console.log(state.filter);
      return {
        ...state,
        filter: action.payload,
        contacts: state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(state.filter.toLowerCase())
        ),
      };
    case 'contacts/addContacts':
      console.log('contacts-case', state.contacts);
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
}

export const store = createStore(contactsReducer, initialState, exhaust);
