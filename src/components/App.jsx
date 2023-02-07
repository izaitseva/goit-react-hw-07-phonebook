import React from "react"
import { nanoid } from 'nanoid';

import { Filter } from "./Filter";
import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";

export class App extends React.Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  contactsPush = (name, number) => {
    const contacts = this.state.contacts;

    if(contacts.some(el=> el.name === name)) {
      alert(`${name} is already in contacts`)
      
    } else {
      contacts.push({
        id: nanoid(),
        name: name,
        number: number
      })
  
      this.setState({
        contacts: contacts
      })
    }
  }

  filterContacts = (filter) => {

    this.setState({
      filter: filter
    })
  }

  render() {

    const filteredContacts = this.state.contacts.filter(
      (el) => el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contactsPush={this.contactsPush} />

        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactList contactsList={filteredContacts} />
      </div>

    );
  }
};
