import React from "react";
import PropTypes from "prop-types";
export class ContactList extends React.Component {
    
    render() {
        
        return (
            <ul>
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
        )
    }

}

ContactList.propTypes = {
    id: PropTypes.string,
  }