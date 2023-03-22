import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts } from "./contactsAPI";

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
            state.contacts.items.push(action.payload);
        },
        // deleteContact: (state, action) => {
        //     state.contacts.items = state.contacts.items.filter(
        //         (contact) => contact.id !== action.payload
        //     );
        // },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.contacts.isLoading = true;
                state.contacts.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.items = action.payload;
                state.contacts.isLoading = false;
                state.contacts.error = null;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.error.message;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                console.log(state);
                state.contacts.items = state.contacts.items.filter(
                    (contact) => contact.id !== action.payload
                );
                // const i = state.contacts.items.findIndex(({ id }) => id === action.payload)
                // state.contacts.items.splice(i, 1);
            })
    }
});


export const { addContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;