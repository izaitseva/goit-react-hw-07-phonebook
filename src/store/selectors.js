export const selectFilteredContacts = (state) => {
    console.log(state);
    return (
        state.contacts.contacts.items.filter((contact) =>
            contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()) ||
            contact.number.toLowerCase().includes(state.contacts.filter.toLowerCase()))
    )
}
