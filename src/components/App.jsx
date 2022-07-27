import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addUserData = contact => {
    const { contacts } = this.state;
    if (
      contacts.some(
        obj => obj.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`Sorry, ${contact.name} is already in contacts`);
    } else if (contacts.some(obj => obj.number === contact.number)) {
      alert(`Sorry, ${contact.number} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handlerFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => id !== contact.id),
    });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form addContact={this.addUserData}> </Form>
        </Section>

        <Section title="Contacts">
          <Filter
            filter={this.state.filter}
            handlerFilter={this.handlerFilter}
          />
          <ContactsList
            contacts={this.filterContacts()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
