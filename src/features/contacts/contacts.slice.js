const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    contacts: [],
    filter: ""
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },

    deleteContact: (state, action) => {
        state.contacts = state.contacts.filter(
            (contact) => contact.id !== action.payload
        );
    }
}
});


export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;