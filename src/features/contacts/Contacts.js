import { nanoid } from "@reduxjs/toolkit";
import ContactsList from "features/ContactsList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./contacts.slice";

export const Contacts = () => {

    const contacts = useSelector((state => state.contacts.contacts));

    const dispatch = useDispatch();
    console.log(contacts);

    const [newContactNumb, setNewContactNumb] = useState("");
    const [newContactName, setNewContactName] = useState("");

    const handleContactName = e => {
        setNewContactName(e.target.value);
    }

    const handleContactNumb = e => {
        setNewContactNumb(e.target.value);
    }

    const onAddContact = () => {
        const newContact = { id: nanoid(), name: newContactName, number: newContactNumb }
        dispatch(addContact(newContact));
        setNewContactName('');
        setNewContactNumb('');
    }

    return (
        <>
            <h2>Phonebook</h2>
            <input
                placeholder="Enter the contact name"
                type="text"
                name="name"
                value={newContactName}
                onChange={handleContactName}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <input
                placeholder="Enter the contact number'"
                type="tel"
                name="number"
                value={newContactNumb}
                onChange={handleContactNumb}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button onClick={onAddContact} type="submit">Add contact</button>
            <div>
                {contacts.length === 0
                    ? <p>You don't have contacts yet</p>
                    : <ContactsList />
                }
            </div>
        </>
    )
}