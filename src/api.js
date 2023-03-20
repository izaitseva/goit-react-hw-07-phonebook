import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
async(_, thunkApi) => {
    
})