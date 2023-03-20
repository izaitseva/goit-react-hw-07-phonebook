import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"
const BASE_URL = "https://6418a42f75be53f451e44854.mockapi.io/contacts"

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, thunkApi) => {

        try {
            const response = await axios.get(BASE_URL);
            return response.data.result;
        } catch (error) {
            thunkApi.rejectWithValue(error.message);
        }
    })