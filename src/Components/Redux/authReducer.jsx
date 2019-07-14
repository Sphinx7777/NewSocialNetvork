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
			return {...state ,loadLogin: true}
		}
		default:
			return state;
	}
};

const setMylogin = (data) => ({type: SET_MY_LOGIN, data});
const setMyRegistration = () => ({type: SET_MY_REGISTRATION});


export const authMe = () => {
	return (dispatch) => {
		loginApi.getMyLogin()
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setMylogin(data.data))
				}
			})
	}
};
export const loginMe = (formData) => {
	return (dispatch) => {
		loginApi.doLoginMe(formData)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setMyRegistration())
				}
			})
	}
};


export default authReducer;