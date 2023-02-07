import React from "react";

export class ContactList extends React.Component {
    
    render() {
        
        return (
            <ul>
            {
                this.props.contactsList.map(
                    el => (<li key={el.id}>{el.name}: {el.number}
                        <button>Delete</button>
                    </li>)
                )
            }
        </ul>
        )
    }

}