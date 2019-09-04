import {SettingsApi} from "../Api/Api";
import {stopSubmit} from "redux-form";


const SET_MY_SETTINGS = '/settingsReducer///SET_MY_SETTINGS';
const SET_STOP_SUBMIT = '/settingsReducer///SET_STOP_SUBMIT';
const SET_USER_PHOTO = '/settingsReducer///SET_USER_PHOTO';
const SET_UPLOAD_PHOTO = '/settingsReducer///SET_UPLOAD_PHOTO';


let initialState = {
	aboutMe: null,
	photos: null,
	submitFinished: null,
	uploadPhotos: null,
};

const settingsReducer = (state = initialState, {type, formData, status}) => {
	switch (type) {
		case SET_MY_SETTINGS: {
			return {...state, aboutMe: {...formData}, submitFinished: true}
		}
		case SET_USER_PHOTO: {
			return {...state, photos: {...formData}}
		}
		case SET_UPLOAD_PHOTO: {
			return {...state, uploadPhotos: status}
		}
		case SET_STOP_SUBMIT: {
			return {...state, submitFinished: false}
		}
		default:
			return state;
	}
};

const setMySettings = (formData) => ({type: SET_MY_SETTINGS, formData});
const setUserPhoto = (formData) => ({type: SET_USER_PHOTO, formData});
export const setUploadPhoto = (status) => ({type: SET_UPLOAD_PHOTO, status});
export const setSubmitFinished = () => ({type: SET_STOP_SUBMIT});


export const sendSettingsForm = (formData) => {
	return async (dispatch) => {
		let data = await SettingsApi.sendFormSettings(formData);
		if (data.resultCode === 0) {
			dispatch(setMySettings(formData));
		} else {
			dispatch(stopSubmit('settingsForm', {_error: data.messages[0]}))
		}
	}
};

export const sendUserPhotos = (photo) => {
	return async (dispatch) => {
		let data = await SettingsApi.sendUserPhoto(photo);
		if (data.resultCode === 0) {
			dispatch(setUserPhoto(data.data.photos));
			dispatch(setUploadPhoto(true));
		}
	}
};


export default settingsReducer;