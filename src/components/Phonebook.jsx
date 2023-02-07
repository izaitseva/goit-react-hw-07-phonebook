import React from "react";
import { nanoid } from 'nanoid';

export class Phonebook extends React.Component {

    state = {
        contacts: [],
        name: '',
        number: ''
    }

    nameInputId = nanoid();

    handleChangeName = e => {
        const { value } = e.currentTarget;

        this.setState({ name: value });
    }

    handleChangeNumb = e => {
        const { value } = e.currentTarget;

        this.setState({ number: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const contacts = this.state.contacts;

        contacts.push({
            id: nanoid(),
            name: this.state.name,
            number: this.state.number
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
                        onChange={this.handleChangeName}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        id={this.nameInputId}
                    />
                    <input
                        type="tel"
                        name="number"
                        value={this.state.value}
                        onChange={this.handleChangeNumb}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button type="submit">Add contact</button>
                </form>
                <h2>Contacts</h2>
                <ul>
                    {
                        this.state.contacts.map(el => (<li key={el.id}>{el.name}:{el.number}</li>))
                    }
                </ul>
            </div>

        )
    }

}