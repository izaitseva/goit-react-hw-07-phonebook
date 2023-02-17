import React from "react";
import PropTypes from "prop-types";

export default function Filter({ filterContacts }) {

    const handleChangeFilter = e => {
        const { value } = e.currentTarget;
        filterContacts(value);
    }

    return (
        <div>
            <p>Find contacts by name</p>
            <input
                type="text"
                name="filter"
                onChange={handleChangeFilter}
            />
        </div>

    )
}

Filter.propTypes = {
    filterContacts: PropTypes.func.isRequired
}