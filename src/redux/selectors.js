export const getFilter = state => state.filter.filter;

export const getFilteredContacts = state =>
  state.contacts.items?.filter(contact =>
    contact.name?.toLowerCase()?.includes(state.filter?.filter?.toLowerCase())
  );

export const getContacts = state => state.contacts.items;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user?.name;

export const getToken = state => state.auth.token;
