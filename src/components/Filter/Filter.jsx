import PropTypes from 'prop-types';
import styles from './Filter.module.css';
export const Filter = ({ filter, handlerFilter }) => {
  return (
    <label className={styles.filterLabel}>
      Find contacts by name or phone-number
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handlerFilter}
      />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerFilter: PropTypes.func.isRequired,
};
