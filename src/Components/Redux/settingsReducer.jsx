import {SettingsApi} from "../Api/Api";
import {stopSubmit} from "redux-form";


const SET_MY_SETTINGS = 'SET_MY_SETTINGS';
const SET_STOP_SUBMIT = 'SET_STOP_SUBMIT';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const SET_UPLOAD_PHOTO = 'SET_UPLOAD_PHOTO';


let initialState = {
	aboutMe: null,
	photos: null,
	submitFinished: null,
	uploadPhotos: null,
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MY_SETTINGS: {
			return {...state, aboutMe: {...action.formData}, submitFinished: true}
		}
		case SET_USER_PHOTO: {
			return {...state, photos: {...action.formData}}
		}
		case SET_UPLOAD_PHOTO: {
			return {...state, uploadPhotos: action.status}
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
	return (dispatch) => {
		SettingsApi.sendFormSettings(formData)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setMySettings(formData));
				} else {
					dispatch(stopSubmit('settingsForm', {_error: data.messages[0]}))
				}
			})
	}

};

export const sendUserPhotos = (photo) => {
	return (dispatch) => {
		SettingsApi.sendUserPhoto(photo)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setUserPhoto(data.data.photos));
					dispatch(setUploadPhoto(true));
				}
			})
	}

};


export default settingsReducer;