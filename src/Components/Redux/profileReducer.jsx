import {profileApi} from "../Api/Api";

const SET_NEW_PROFILE = 'SET_NEW_PROFILE';



let initialState = {
	profile: null,
	status: null,
	loadProfile: false,
	friendBtnState: true,

};

const profileReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_NEW_PROFILE: {
			return {...state, profile:action.profile,loadProfile:true}
		}
		default:
			return state;
	}};

const setNewProfile = (profile) => ({type:SET_NEW_PROFILE, profile});




export const getNewProfile = (userId) => {
	return (dispatch) => {
		profileApi.getProfile(userId)
			.then(data => {
			 dispatch(setNewProfile(data));
			})

	}
};

export default profileReducer;