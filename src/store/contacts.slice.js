
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
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
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});


export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;