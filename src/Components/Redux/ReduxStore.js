import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers(
	 {
		usersPage: usersReducer,
		 profilePage: profileReducer,
		 auth: authReducer,
		 form: formReducer
	});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store=store;