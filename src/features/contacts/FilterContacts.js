import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../store/contacts.slice";
import { MdSearch } from "react-icons/md";
import "./FilterContacts.css";

export const FilterContacts = () => {
     const filter = useSelector((state) => state.contacts.filter);
    const dispatch = useDispatch();

    const onFilterChange = (filter) => {
        dispatch(setFilter(filter))
    }

    return (
        <>
            <h3>Find contacts by name</h3>
            <div className="search_input_wrapper">
                <MdSearch />
                <input className="search_input" placeholder="Find a friend"
                    value={filter}
                    onChange={(e) => onFilterChange(e.target.value)} />
            </div>
        </>
    )
}