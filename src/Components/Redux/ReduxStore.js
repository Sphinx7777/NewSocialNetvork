import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk'
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form';
import dialogsReducer from "./dialogsReducer";
import initialsReducer from "./initialsReducer";
import settingsReducer from "./settingsReducer";
import newsReducer from "./newsReducer";


let reducers = combineReducers(
	{
		usersPage: usersReducer,
		profilePage: profileReducer,
		auth: authReducer,
		form: formReducer,
		dialogsPage: dialogsReducer,
		initial: initialsReducer,
		settings: settingsReducer,
		newsPage: newsReducer
	});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, compose(
	composeEnhancers(
		applyMiddleware(thunkMiddleware)
	)));

export default store;