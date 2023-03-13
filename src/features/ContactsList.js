import { deleteContact } from "./contacts/contacts.slice";

const { useSelector, useDispatch } = require("react-redux");

const ContactsList = () => {
    const contacts = useSelector((state => state.contacts.contacts));

    const dispatch = useDispatch();
    const onDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <ul>
            {
                contacts.map((contact) => (
                    <li key={contact.id}>{contact.name}:{contact.number}
                        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
        </ul>
    )
}

export default ContactsList;