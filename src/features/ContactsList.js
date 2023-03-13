import { deleteContact } from "../store/contacts.slice";

import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "store/selectors";
const ContactsList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);

    const dispatch = useDispatch();
    const onDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <ul>
            {
                filteredContacts.map((contact) => (
                    <li key={contact.id}>{contact.name}:{contact.number}
                        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
        </ul>
    )
}

export default ContactsList;