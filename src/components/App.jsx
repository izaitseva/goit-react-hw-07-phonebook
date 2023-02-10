import React from "react"
import { nanoid } from 'nanoid';

// import contacts from "./contacts.json";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";
import { ContactForm } from "./ContactForm";

export class App extends React.Component {

  state = {
    contacts: [],
    filter: ''
  }

  componentDidUpdate (prevProps, prevState) {
      this.state.setItem('contacts', JSON.stringify(this.state.contacts))
}


  contactsPush = (name, number) => {
    if (this.state.contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
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

  getFilteredContacts = () => {
    return this.state.contacts.filter(
      (el) => el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
  }

  render() {

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contactsPush={this.contactsPush} />

        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactList contactsList={this.getFilteredContacts()} removeContacts={this.removeContacts} />
      </div>

    );
  }
};