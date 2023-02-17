import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ContactForm({ contactsPush }) {

    const [name, setName] = useState('');
    const handleChangeName = e => {

        setName(e.target.value)
    }

    const [number, setNumber] = useState('');
    const handleChangeNumb = e => {
        setNumber(e.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        contactsPush(name, number);
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Phonebook</h2>
            <p>Name</p>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChangeName}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <input
                type="tel"
                name="number"
                value={number}
                onChange={handleChangeNumb}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button type="submit">Add contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    contactsPush: PropTypes.func.isRequired
}