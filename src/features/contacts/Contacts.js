import ContactsList from "features/ContactsList";
import { useSelector } from "react-redux";
import CreateContacts from "./CreateContacts";
import { FilterContacts } from "./FilterContacts";

export const Contacts = () => {

    const contacts = useSelector((state => state.contacts.contacts));
    console.log(contacts);

    return (
        <>
            <CreateContacts />
            <div>
                {contacts.length === 0
                    ? <p>You don't have contacts yet</p>
                    : <>
                        <FilterContacts />
                        <ContactsList />
                    </>
                }
            </div>
        </>
    )
}