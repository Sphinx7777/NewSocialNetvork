import {profileApi} from "../Api/Api";

const SET_MY_LOGIN = 'SET_MY_LOGIN';



let initialState = {
	id: null,
	email: null,
	login: null,
	loadLogin: false

};

const authReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_MY_LOGIN: {
			return {...state,id:action.data.id,email:action.data.email,login:action.data.login,loadLogin:true}
		}
		default:
			return state;
	}};

const setMylogin = (data) => ({type:SET_MY_LOGIN, data});




export const authMe = () => {
	return (dispatch) => {
		profileApi.getMyLogin()
			.then(data => {
				if(data.resultCode === 0){
			 dispatch(setMylogin(data.data))}
			})

	}
};

export default authReducer;