import { createStore, applyMiddleware } from "redux";
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { combineReducers } from "@reduxjs/toolkit";
import { calendarReducer } from "./reducer/calendarReducer";


const combineReducer = combineReducers({
    calendarReducer: calendarReducer
});

// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     whitelist: ['nuevo'] 
// };
// const persistedReducer = persistReducer(persistConfig, reducers)
export default function configureStore(initialState = {}) {
    return createStore(combineReducer, initialState, applyMiddleware(thunk))
}
