import React from "react";
import PropTypes from "prop-types";

export class Filter extends React.Component {

    handleChangeFilter = e => {
        const { value } = e.currentTarget;
        this.props.filterContacts(value);
    }

    render() {

        return (
            <div>
                <p>Find contacts by name</p>
                <input
                    type="text"
                    name="filter"
                    onChange={this.handleChangeFilter}
                />
            </div>

        )
    }
}

Filter.propTypes = {
    filterContacts: PropTypes.func.isRequired
}