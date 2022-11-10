import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactsData, deleteContactsData, getContacts } from 'helpers/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await addContactsData(contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const data = await deleteContactsData(id);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
