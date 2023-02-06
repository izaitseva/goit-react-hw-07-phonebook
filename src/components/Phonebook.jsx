import React from "react";
import { nanoid } from 'nanoid';

export class Phonebook extends React.Component {
    
    state = {
        contacts: [],
        name: ''
    }

    nameInputId = nanoid();


    handleChange = e => {
        const {name, value} = e.currentTarget;

        this.setState({ [name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.name);
        this.reset()
    }

    reset = () => {
        this.setState({name: ''})
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
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        id={this.nameInputId}
                    />
                    <button>Add contact</button>
                </form>
                <h2>Contacts</h2>
            </div>

        )
    }

}