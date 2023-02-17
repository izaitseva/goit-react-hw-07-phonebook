import React from "react";
import PropTypes from "prop-types";

export default function ContactList({ contactsList, removeContacts }) {

    return (
        <div>
            {contactsList.length === 0
                ? <p>You don't have contacts yet</p>
                : <ul>
                    {
                        contactsList.map(
                            el => (<li key={el.id}>{el.name}: {el.number}
                                <button onClick={() => {
                                    removeContacts(el.id)
                                }}>Delete</button>
                            </li>)
                        )
                    }
                </ul>
            }
        </div>
    )
}

ContactList.propTypes = {
    contactsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })).isRequired,
    removeContacts: PropTypes.func.isRequired
}