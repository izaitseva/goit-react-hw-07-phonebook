import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts.slice';


const rootReducer = combineReducers({
    contacts: contactsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export { store };