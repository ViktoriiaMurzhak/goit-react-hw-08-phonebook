import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <Box>
      <div className={css.box}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Box>
  );
}
