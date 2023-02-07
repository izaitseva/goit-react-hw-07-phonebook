import React from "react";
import { nanoid } from 'nanoid';

export class Phonebook extends React.Component {

    state = {
        contacts: [],
        name: ''
    }

    nameInputId = nanoid();

    handleChange = e => {
        const { value } = e.currentTarget;

        this.setState({ name: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const contacts = this.state.contacts;
        
        contacts.push({
            id: nanoid(),
            name: this.state.name
        });

        this.setState({
            contacts: contacts
        })
    }

    reset = () => {
        this.setState({ name: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Phonebook</h2>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        value={this.state.value}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        id={this.nameInputId}
                    />
                    <button type="submit">Add contact</button>
                </form>
                <h2>Contacts</h2>
                <ul>
                    {
                        this.state.contacts.map(el => (<li key={el.id}>{el.name}</li>))
                    }
                </ul>
            </div>

        )
    }

}