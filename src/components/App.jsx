import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import myContacts from '../data/contacts.json';

const CONTACTS_LIST_LOCAL_KEY = 'contacts-list';

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  const handleAddContact = (name, number) => {
    return contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts(prevContacts => [
          ...prevContacts,
          {
            name,
            id: nanoid(),
            number,
          },
        ]);
  };

  function getContacts() {
    const localContactsList = localStorage.getItem(CONTACTS_LIST_LOCAL_KEY);
    const parsedlocalContactsList = JSON.parse(localContactsList);

    if (parsedlocalContactsList?.length > 0) {
      return JSON.parse(localContactsList);
    } else {
      return myContacts;
    }
  }

  useEffect(() => {
    localStorage.setItem(CONTACTS_LIST_LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <ContactList
        contacts={filteredContacts()}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
