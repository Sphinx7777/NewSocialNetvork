
import {SettingsApi} from "../Api/Api";
import {stopSubmit} from "redux-form";


const SET_MY_SETTINGS = 'SET_MY_SETTINGS';



let initialState = {
	aboutMe: null
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MY_SETTINGS: {
			return {...state,aboutMe:{...action.formData} }
		}

		default:
			return state;
	}
};

const setMySettings = (formData) => ({type: SET_MY_SETTINGS, formData});





export const sendSettingsForm = (formData) => {
	return (dispatch) => {
		SettingsApi.sendFormSettings(formData)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setMySettings(formData));
				}else {
					dispatch(stopSubmit('settingsForm',{_error:data.messages[0]}))
				}
			})}};




export default settingsReducer;