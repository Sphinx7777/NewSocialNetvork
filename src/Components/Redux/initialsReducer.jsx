import {authMe} from "./authReducer";


const SET_INITIALS_FINISHED = 'SET_INITIALS_FINISHED';


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
	return (dispatch) => {
  let promise = dispatch(authMe());
		promise.then(
			dispatch(setInitialization())
		)
	};
};

export default initialsReducer;