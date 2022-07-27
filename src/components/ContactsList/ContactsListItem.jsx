import PropTypes from 'prop-types';
import styles from './ContactsListItem.module.css';
export const ContactsListItem = ({ name, number, deleteContact, id }) => {
  return (
    <li className={styles.item}>
      <span>{name}: </span> <span>{number}</span>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
