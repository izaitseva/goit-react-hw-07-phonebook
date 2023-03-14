import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { addContact } from "../../store/contacts.slice";
import { useDispatch, useSelector } from "react-redux";

const CreateContacts = () => {

    const [newContactNumb, setNewContactNumb] = useState("");
    const [newContactName, setNewContactName] = useState("");
    const contacts = useSelector((state => state.contacts.contacts));
    
    const dispatch = useDispatch();

    const handleContactName = e => {
        setNewContactName(e.target.value);
    }

    const handleContactNumb = e => {
        setNewContactNumb(e.target.value);
    }

    const onAddContact = () => {
        if (newContactName.trim() !== '' && newContactNumb.trim() !== '') {
            if (contacts.some(el => el.name.toLowerCase() === newContactName.toLowerCase())) {
                alert(`${newContactName} is already in contacts`)
            } else {
                const newContact = { id: nanoid(), name: newContactName, number: newContactNumb }
                dispatch(addContact(newContact));
                setNewContactName('');
                setNewContactNumb('');
            }
        }
    }

    return (
        <div>
            <h3>Phonebook</h3>
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
        </div >
    )
}

export default CreateContacts;