import React from "react";
import { nanoid } from 'nanoid';

export class Phonebook extends React.Component {

    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
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

    handleChangeFilter = e => {
        const { value } = e.currentTarget;

        this.setState({ filter: value });
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

    // removeContact = (id) => {
    //     console.log(id)
    // };

    reset = () => {
        this.setState({ name: '' })
    }

    render() {

        const filteredContacts = this.state.contacts.filter(
            (el) => el.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )

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
                    <p>Find contacts by name</p>
                    <input
                    type="text"
                    name="filter"
                    onChange={this.handleChangeFilter}
                    />
                <ul>
                    {
                        filteredContacts.map(
                            el => (<li key={el.id}>{el.name}: {el.number}
                                <button>Delete</button>
                            </li>)
                        )
                    }
                </ul>
            </div>

        )
    }

}