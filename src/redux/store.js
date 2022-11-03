import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import myContacts from '../data/contacts.json';

export const initialState = {
  contacts: myContacts,
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
