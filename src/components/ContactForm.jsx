import React from "react";
import PropTypes from "prop-types";

export class ContactForm extends React.Component {

    state = {
        name: '',
        number: ''
    }

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
        this.props.contactsPush(this.state.name, this.state.number);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number:'' })
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Phonebook</h2>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChangeName}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChangeNumb}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        )
    }

}

ContactForm.propTypes = {
    contactsPush: PropTypes.func.isRequired
}