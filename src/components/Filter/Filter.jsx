import { useDispatch, useSelector } from 'react-redux';
import { filterContactsAction } from 'redux/store';
import css from './Filter.module.css';

export const Filter = () => {
  const { filter, contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterContactsAction(e.target.value));
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.full}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};
