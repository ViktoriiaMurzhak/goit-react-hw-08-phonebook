import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import contacts from '../data/contacts.json';

const CONTACTS_LIST_LOCAL_KEY = 'contacts-list';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            {
              name,
              id: nanoid(),
              number,
            },
          ],
        }));
  };

  componentDidMount() {
    const localContactsList = localStorage.getItem(CONTACTS_LIST_LOCAL_KEY);
    if (localContactsList) {
      this.setState({ contacts: JSON.parse(localContactsList) });
    } else {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem(CONTACTS_LIST_LOCAL_KEY, JSON.stringify(contacts));
    }
  }

  handleDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <div className={css.section}>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.filteredContacts()}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
