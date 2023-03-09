import { useSelector } from "react-redux"

export const Contacts = () => {
    const contacts = useSelector((state => state.contacts.contacts));
    console.log(contacts);

    return (
        <ul>
            {
                contacts.map(
                    contact => (<li key={contact.id}>
                        {contact.name}: {contact.number}
                    </li>)
                )
            }
        </ul>
    )
}