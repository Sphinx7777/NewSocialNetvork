

const SET_NEW_PROFILE = 'SET_NEW_PROFILE';



let initialState = {
userAnswers: [
	{id:1, answered:'weewe dsd swdwsdsdwd sssd dssdsd'},
	{id:2, answered:'sdwsdsdsdsd dsd dsdsd  sdsds sssdssd swewew'},
],
	myPost: [
		{id:1, answered:'ывыв ыывывцы ывывы ывывывы ывы'},
		{id:2, answered:'sгшгшгш гнегне ппрпп ирпп'},
	],
	postSend: null,
	answersLoad: null,

};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NEW_PROFILE: {
			return {...state, profile: action.profile, loadProfile: true}
		}
		default:
			return state;
	}
};

/*
const setNewProfile = (profile) => ({type: SET_NEW_PROFILE, profile});
*/


/*export const addNewPost = (post) => {
	return (dispatch) => {
		dispatch(setUpdateLoadPost(false));
		dispatch(setNewPost(post));
		dispatch(setUpdateLoadPost(true))
	}
};

export const getNewProfile = (userId) => {
	return (dispatch) => {
		profileApi.getProfile(userId)
			.then(data => {
				dispatch(setNewProfile(data));
			})}
};*/






export default dialogsReducer;