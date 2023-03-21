import { Contacts } from "features/contacts/Contacts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "store/contactsAPI";

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div>
            <Contacts />
        </div>
    )
}