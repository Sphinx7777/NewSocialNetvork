import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profileReducer";


let reducers = combineReducers(
	 {
		usersPage: usersReducer,
		 profilePage: profileReducer
	});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;