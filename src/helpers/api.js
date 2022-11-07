import axios from 'axios';

const BASE_URL = 'https://6368d08c28cd16bba70d2669.mockapi.io/';

export const getContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}contacts`);

  return data;
};

export const addContactsData = async contact => {
  const { data } = await axios.post(`${BASE_URL}contacts`, contact);

  return data;
};

export const deleteContactsData = async contactId => {
  const { data } = await axios.delete(`${BASE_URL}contacts/${contactId}`);
  console.log('data', data);
  return data;
};
