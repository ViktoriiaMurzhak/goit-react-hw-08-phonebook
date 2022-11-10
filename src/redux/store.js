import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './rootReducer';
import { authReduser } from './auth/auth-slise';
import { contactReduser } from './contacts/slice.contacts';
import { filterReduser } from './filter/slice.filter';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistConfigContact = {
  key: 'contacts',
  storage,
};

const persistConfigFilter = {
  key: 'filter',
  storage,
};

const persistedAuth = persistReducer(persistConfigAuth, authReduser);

const persistedContact = persistReducer(persistConfigContact, contactReduser);

const persistedFilter = persistReducer(persistConfigFilter, filterReduser);

export const store = configureStore({
  reducer: {
    auth: persistedAuth,
    contacts: persistedContact,
    filter: persistedFilter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
