import { useSelector, useDispatch } from "react-redux";
import { BsPersonDashFill } from "react-icons/bs";
import "./ContactList.css";
import { deleteContact } from "../store/contacts.slice";
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
                <>
                    <h3>Contacts</h3>
                    <ul className="list">
                        {filteredContacts.map((contact) => (
                            <li className="list_item" key={contact.id}>
                                <div className="contact-info">
                                    <div className="contact-info_name">
                                        <small className="contact-info_label">Name:</small>
                                        <span>{contact.name}</span>
                                    </div>
                                    <div className="contact-info_number">
                                        <small className="contact-info_label">Number:</small>
                                        <span>{contact.number}</span>
                                    </div>
                                </div>
                                <button className="delete-btn" onClick={() => onDeleteContact(contact.id)}>
                                    <BsPersonDashFill />
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>There are no contacts to show</p>
            )}

        </>
    )
}

export default ContactsList;