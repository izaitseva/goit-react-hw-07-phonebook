import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6418a42f75be53f451e44854.mockapi.io/api';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkApi) => {

    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})


export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkApi) => {

        try {
            const response = await axios.delete(`/contacts/${id}`);
            return id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    })