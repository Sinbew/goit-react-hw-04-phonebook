import PropTypes from 'prop-types';
import { ContactsListItem } from './ContactsListItem';
import styles from './ContactsList.module.css';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.ul}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
