import React, { useState } from "react"
import { nanoid } from 'nanoid';

import Filter from "./Filter";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

export default function App() {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const contactsPush = (name, number) => {
    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)

    } else {
      const newContact = {
        id: nanoid(), name, number
      }

      setContacts(prevState => [...prevState, newContact]);
    }
  }

  const removeContacts = contactId => {
    setContacts(prevState => prevState.contacts.filter(contact => contact.id !== contactId))
  };

  const filterContacts = (filter) => {
    setFilter(filter);
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