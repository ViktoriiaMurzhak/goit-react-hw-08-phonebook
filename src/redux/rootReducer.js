import { combineReducers } from 'redux';
import filterReducer from './filter/slice.filter';
import contactsReducer from './contacts/slice.contacts';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
