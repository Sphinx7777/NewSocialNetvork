import {friendsApi, profileApi} from "../Api/Api";

const SET_NEW_PROFILE = 'SET_NEW_PROFILE';
const SET_FRIEND_STATUS = 'SET_FRIEND_STATUS';
const SET_STATUS = 'SET_STATUS';
const SET_FRIEND_BTN_STATE = 'SET_FRIEND_BTN_STATE';
const SET_ADD_USER_AS_FRIEND = 'SET_ADD_USER_AS_FRIEND';
const SET_DELL_USER_FROM_FRIENDS = 'SET_DELL_USER_FROM_FRIENDS';
const SET_UPDATE_STATUS = 'SET_UPDATE_STATUS';
const SET_NEW_POST = 'SET_NEW_POST';
const SET_UPDATE_LOAD_POST = 'SET_UPDATE_LOAD_POST';
const SET_STATUS_LOAD_PROFILE = 'SET_STATUS_LOAD_PROFILE';


let initialState = {
	posts: [
		{text: 'my post number wan'},
		{text: 'my post number two'},
		{text: 'my post number tree'}
	],
	profile: null,
	status: null,
	loadProfile: false,
	friendBtnState: true,
	friendStatus: null,
	postsUpdate: true
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NEW_PROFILE: {
			return {...state, profile: action.profile}
		}
		case SET_STATUS_LOAD_PROFILE: {
			return {...state, loadProfile: true}
		}
		case SET_FRIEND_STATUS: {
			return {...state, friendStatus: action.friendStatus}
		}
		case SET_ADD_USER_AS_FRIEND: {
			return {...state, friendStatus: action.data}
		}
		case SET_DELL_USER_FROM_FRIENDS: {
			return {...state, friendStatus: action.data}
		}
		case SET_STATUS: {
			return {...state, status: action.status}
		}
		case SET_UPDATE_STATUS: {
			return {...state, status: action.status}
		}
		case SET_FRIEND_BTN_STATE: {
			return {...state, friendBtnState: action.friendBtnState}
		}
		case SET_NEW_POST: {
			return {...state, ...state.posts.unshift({text: action.post}),postsUpdate:true}
		}
		case SET_UPDATE_LOAD_POST: {
			return {...state,postsUpdate:action.data}
		}
		default:
			return state;
	}
};

const setNewProfile = (profile) => ({type: SET_NEW_PROFILE, profile});
const setFriendStatus = (friendStatus) => ({type: SET_FRIEND_STATUS, friendStatus});
const setStatus = (status) => ({type: SET_STATUS, status});
const setFriendBtnState = (friendBtnState) => ({type: SET_FRIEND_BTN_STATE, friendBtnState});
const setAddUserAsFriend = (data) => ({type: SET_ADD_USER_AS_FRIEND, data});
const setDellUserFromFriends = (data) => ({type: SET_DELL_USER_FROM_FRIENDS, data});
const setUpdateStatus = (status) => ({type: SET_UPDATE_STATUS, status});
const setNewPost = (post) => ({type: SET_NEW_POST, post});
const setUpdateLoadPost = (data) => ({type:SET_UPDATE_LOAD_POST,data});
const setStatusLoadProfile = () => ({type:SET_STATUS_LOAD_PROFILE});


export const addNewPost = (post) => {
	return (dispatch) => {
		dispatch(setUpdateLoadPost(false));
		dispatch(setNewPost(post));
	}
};

export const getNewProfile = (userId) => {
	return (dispatch) => {
		profileApi.getProfile(userId)
			.then(data => {
				dispatch(setNewProfile(data));
				dispatch(setStatusLoadProfile());
			})}
};

export const getFriendStatus = (userId) => {
	return (dispatch) => {
		friendsApi.getFriendStatus(userId)
			.then(data => {
				dispatch(setFriendStatus(data))
			})
	}
};

export const addUserAsFriend = (userId) => {
	return (dispatch) => {
		dispatch(setFriendBtnState(false));
		friendsApi.addUsersAsFriend(userId)
			.then(data => {
				if (data.resultCode === 0)
					dispatch(setAddUserAsFriend(true));
				dispatch(setFriendBtnState(true))

			})
	}
};

export const dellUserAsFriend = (userId) => {
	return (dispatch) => {
		dispatch(setFriendBtnState(false));
		friendsApi.dellUsersAsFriend(userId)
			.then(data => {
				if (data.resultCode === 0)
					dispatch(setDellUserFromFriends(false));
				dispatch(setFriendBtnState(true))

			})
	}
};

export const getStatus = (userId) => {
	return (dispatch) => {
		profileApi.getUserStatus(userId)
			.then(data => {
				dispatch(setStatus(data))
			})
	}
};
export const updateStatus = (status) => {
	return (dispatch) => {
		profileApi.updateUserStatus(status)
			.then(data => {
				if (data.resultCode === 0)
					dispatch(setUpdateStatus(status))
			})
	}
};

export default profileReducer;