
import {SettingsApi} from "../Api/Api";
import {stopSubmit} from "redux-form";


const SET_MY_SETTINGS = 'SET_MY_SETTINGS';
const SET_STOP_SUBMIT = 'SET_STOP_SUBMIT';



let initialState = {
	aboutMe: null,
	photos: null,
	submitFinished: null
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MY_SETTINGS: {
			return {...state,aboutMe:{...action.formData},submitFinished:true }
		}
		case SET_STOP_SUBMIT: {
			return {...state,submitFinished:false}
		}

		default:
			return state;
	}
};

const setMySettings = (formData) => ({type: SET_MY_SETTINGS, formData});
export const setSubmitFinished = () => ({type: SET_STOP_SUBMIT});





export const sendSettingsForm = (formData) => {
	return (dispatch) => {
		SettingsApi.sendFormSettings(formData)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setMySettings(formData));
					return ''
				}else {
					dispatch(stopSubmit('settingsForm',{_error:data.messages[0]}))
				}
			})}

};




export default settingsReducer;