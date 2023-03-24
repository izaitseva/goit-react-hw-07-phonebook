export const selectFilteredContacts = (state) => {

    return (
        state.contacts.contacts.items.filter((contact) =>
            contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()) ||
            contact.phone.toLowerCase().includes(state.contacts.filter.toLowerCase()))
    )
} 
