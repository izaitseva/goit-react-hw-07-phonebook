import React from "react"
import { nanoid } from 'nanoid';
import contacts from "./contacts.json";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";

export class App extends React.Component {

  state = {
    contacts,
    filter: ''
  }

  contactsPush = (name, number) => {
    const contacts = this.state.contacts;

    if (contacts.some(el => el.name === name)) {
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

  removeContacts = contactId => {
    console.log(contactId);

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

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
        <ContactList contactsList={filteredContacts} removeContacts={this.removeContacts} />
      </div>

    );
  }
};
