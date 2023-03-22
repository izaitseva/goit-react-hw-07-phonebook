

// // export const contactsReducer = (state = initState, action) => {
// //     switch (action.type) {
// //     'contacts/added': {

// //     }
// //     'contacts/deleted': {

// //     }
// //     'contacts/filtered': {

// //     }
// //     default:
// // return state;
// // }
// // }

// import { combineReducers } from '@reduxjs/toolkit';
// import {
//     persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contacts.slice';

// const persistConfig = {
//     key: 'contacts',
//     storage,
// }

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     // filter: filterReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// export default persistedReducer;