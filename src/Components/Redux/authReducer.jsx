import {loginApi} from "../Api/Api";
import {stopSubmit} from "redux-form";


const SET_MY_LOGIN = '/authReducer///SET_MY_LOGIN';
const SET_MY_REGISTRATION = '/authReducer///SET_MY_REGISTRATION';


let initialState = {
	id: null,
	email: null,
	login: null,
	loadLogin: false

};

const authReducer = (state = initialState, {type, data}) => {
	switch (type) {
		case SET_MY_LOGIN: {
			return {...state, ...data, loadLogin: true}
		}
		case SET_MY_REGISTRATION: {
			return {...state, loadLogin: data}
		}
		default:
			return state;
	}
};

const setMylogin = (data) => ({type: SET_MY_LOGIN, data});
const setMyRegistration = (data) => ({type: SET_MY_REGISTRATION, data});


export const authMe = () => async (dispatch) => {
	let data = await loginApi.getMyLogin();
	if (data.resultCode === 0) {
		dispatch(setMylogin(data.data));
	}
};

export const loginMe = (data) => {
	return async (dispatch) => {
		let result = await loginApi.loginMe(data);
		if (result.resultCode === 0) {
			dispatch(authMe());
		} else {
			dispatch(stopSubmit('loginForm', {_error: result.messages[0]}))
		}
	}
};

export const logOutMe = () => {
	return async (dispatch) => {
		let data = await loginApi.logOutMe();
		if (data.resultCode === 0) {
			data = {id: null, email: null, login: null};
			dispatch(setMylogin(data));
			dispatch(setMyRegistration(false))
		}
	}
};


export default authReducer;