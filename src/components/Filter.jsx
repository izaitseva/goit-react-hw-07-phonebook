import React from "react";

export class Filter extends React.Component {

    handleChangeFilter = e => {

        const { value } = e.currentTarget;
        this.props.filterContacts(value);
    }

    render() {

        return (
            <div>

                <h2>Contacts</h2>
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


