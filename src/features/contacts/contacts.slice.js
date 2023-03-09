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
            return { 
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        }
    }
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;