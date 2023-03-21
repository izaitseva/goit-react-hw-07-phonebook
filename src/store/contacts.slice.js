import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsAPI";

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
            state.items.push(action.payload);
        },

        deleteContact: (state, action) => {
            state.items = state.items.filter(
                (contact) => contact.id !== action.payload
            );
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchContacts.pending, (state) => {
                    state.isLoading = true;
                })
                .addCase(fetchContacts.fulfilled, (state, action) => {
                    state.items = action.payload;
                    state.isLoading = false;
                })
        }
    }
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;