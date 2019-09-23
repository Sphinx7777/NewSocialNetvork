import {profileApi, loginApi} from "../Api/Api";
import {stopSubmit} from "redux-form";



const SET_MY_LOGIN = '/authReducer///SET_MY_LOGIN';
const SET_MY_REGISTRATION = '/authReducer///SET_MY_REGISTRATION';
const SET_MY_PHOTO = '/authReducer///SET_MY_PHOTO';


let initialState = {
	id: null,
	email: null,
	login: null,
	loadLogin: false,
	myPhoto : null

};

const authReducer = (state = initialState, {type, data,photo}) => {
	switch (type) {
		case SET_MY_LOGIN: {
			return {...state, ...data, loadLogin: true}
		}
		case SET_MY_REGISTRATION: {
			return {...state, loadLogin: data}
		}
		case SET_MY_PHOTO: {
			return {...state, myPhoto:photo}
		}
		default:
			return state;
	}
};

const setMylogin = (data) => ({type: SET_MY_LOGIN, data});
const setMyRegistration = (data) => ({type: SET_MY_REGISTRATION, data});
export const setMyPhoto = (photo) => ({type: SET_MY_PHOTO, photo});




export const authMe = () => async (dispatch) => {
	let data = await loginApi.getMyLogin();
	if (data.resultCode === 0) {
		dispatch(setMylogin(data.data));
	}
};
export const getMyPhoto = (loginId) => async (dispatch) => {
	let data = await profileApi.getProfile(loginId);
	dispatch(setMyPhoto(data.photos));

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