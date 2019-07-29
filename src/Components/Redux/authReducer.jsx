import {loginApi} from "../Api/Api";


const SET_MY_LOGIN = 'SET_MY_LOGIN';
const SET_MY_REGISTRATION = 'SET_MY_REGISTRATION';


let initialState = {
	id: null,
	email: null,
	login: null,
	loadLogin: false

};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MY_LOGIN: {
			return {...state, id: action.data.id, email: action.data.email, login: action.data.login, loadLogin: true}
		}
		case SET_MY_REGISTRATION: {
			return {...state, loadLogin: action.data}
		}
		default:
			return state;
	}
};

const setMylogin = (data) => ({type: SET_MY_LOGIN, data});
const setMyRegistration = (data) => ({type: SET_MY_REGISTRATION, data});


export const authMe = () => {
	return (dispatch) => {
		loginApi.getMyLogin()
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setMylogin(data.data))
				}})}};

export const loginMe = (formData) => {
	return (dispatch) => {
		loginApi.doLoginMe(formData)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setMyRegistration(true))
				}})}};

export const logOutMe = () => {
	return (dispatch) => {
		loginApi.logOutMe()
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setMyRegistration(false))
				}})}};


export default authReducer;