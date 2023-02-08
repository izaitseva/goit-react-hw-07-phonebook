import React from "react";
import PropTypes from "prop-types";
export class ContactList extends React.Component {

    render() {

        return (
            <div>
                {this.props.contactsList.length === 0
                    ? <p>You don't have contacts yet</p>
                    : <ul>
                        {
                            this.props.contactsList.map(
                                el => (<li key={el.id}>{el.name}: {el.number}
                                    <button onClick={() => {
                                        this.props.removeContacts(el.id)
                                    }}>Delete</button>
                                </li>)
                            )
                        }
                    </ul>
                }
            </div>
        )
    }
}

ContactList.propTypes = {
    contactsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })),

    removeContacts: PropTypes.func.isRequired
}