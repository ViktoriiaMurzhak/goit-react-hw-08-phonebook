import { getContacts } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = (name, phone) => {
    return contacts?.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(
          addContacts({
            id: nanoid(),
            name,
            phone,
          })
        );
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default: {
        return;
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact(name, phone);
    onDelete();
  };

  const onDelete = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label title="Name" htmlFor="name" className={css.label}>
        Name
      </label>
      <input
        className={css.full}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={name}
        required
      />
      <label htmlFor="phone" className={css.label}>
        Number
      </label>{' '}
      <input
        className={css.full}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        value={phone}
        required
      />
      <button className={css.add} type="submit">
        Add contact
      </button>
    </form>
  );
};
