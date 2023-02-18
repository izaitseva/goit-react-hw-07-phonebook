import React, { useState } from "react"
import { nanoid } from 'nanoid';

import Filter from "./Filter";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

export default function App() {

  const [contacts, set] = useState([]);
  const [filter, setFilter] = useState('');

  componentDidMount() {

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }

  }
  contactsPush = (name, number) => {
    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)

    } else {

      this.setState(prevState => {

        let contact = {
          id: nanoid(),
          name: name,
          number: number
        };

        return {
          contacts: [...prevState.contacts, contact]
        }
      })
    }
  }

  removeContacts = contactId => {

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  filterContacts = (filter) => {

    this.setState({
      filter: filter
    })
  }

  const getFilteredContacts = () => {
    return contacts.filter(
      (el) => el.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contactsPush={contactsPush} />
      <h2>Contacts</h2>
      <Filter filterContacts={filterContacts} />
      <ContactList contactsList={getFilteredContacts()} removeContacts={removeContacts} />
    </div>

  );
}