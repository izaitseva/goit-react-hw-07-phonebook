import { useDispatch } from "react-redux"
import { setFilter } from "../../store/contacts.slice";

export const FilterContacts = () => {

    const dispatch = useDispatch();

    const onFilterChange = (filter) => {
        dispatch(setFilter(filter))
    }
    return (
        <>
            <h3>Find contacts by name</h3>
            <input placeholder="Find a friend" onChange={(e) => onFilterChange(e.target.value)} />
        </>
    )
}