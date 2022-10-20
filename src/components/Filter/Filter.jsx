import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleFilter }) => {
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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
