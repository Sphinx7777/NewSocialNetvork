import {authMe} from "./authReducer";


const SET_INITIALS_FINISHED = '/initialsReducer///SET_INITIALS_FINISHED';


let initialState = {
	initialisation: false,
};

const initialsReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_INITIALS_FINISHED: {
			return {...state,initialisation: true}
		}
		default:
			return state;
	}
};

const setInitialization = () => ({type: SET_INITIALS_FINISHED});


export const initializationApp = () => {
	return async (dispatch) => {
		let promise = await dispatch(authMe());
		 await Promise.all([promise]);
			dispatch(setInitialization());
		}};


export default initialsReducer;


