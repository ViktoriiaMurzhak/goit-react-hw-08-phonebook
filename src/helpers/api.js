import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContactsData = async contact => {
  const { data } = await axios.post('/contacts', contact);

  return data;
};

export const deleteContactsData = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
