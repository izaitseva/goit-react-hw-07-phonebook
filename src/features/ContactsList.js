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
        <>

            {filteredContacts && filteredContacts.length > 0 ? (
                <ul>
                    <h3>Contacts</h3>
                    {filteredContacts.map((contact) => (
                        <li key={contact.id}>
                            {contact.name}:{contact.number}
                            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Error</p>
            )}

        </>
    )
}

export default ContactsList;