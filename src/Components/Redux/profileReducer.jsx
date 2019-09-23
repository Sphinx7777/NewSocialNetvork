import {friendsApi, profileApi} from "../Api/Api";

const SET_NEW_PROFILE = '/profileReducer///SET_NEW_PROFILE';
const SET_FRIEND_STATUS = '/profileReducer///SET_FRIEND_STATUS';
const SET_STATUS = '/profileReducer///SET_STATUS';
const SET_FRIEND_BTN_STATE = '/profileReducer///SET_FRIEND_BTN_STATE';
const SET_ADD_USER_AS_FRIEND = '/profileReducer///SET_ADD_USER_AS_FRIEND';
const SET_DELL_USER_FROM_FRIENDS = '/profileReducer///SET_DELL_USER_FROM_FRIENDS';
const SET_UPDATE_STATUS = '/profileReducer///SET_UPDATE_STATUS';
const SET_NEW_POST = '/profileReducer///SET_NEW_POST';
const SET_UPDATE_LOAD_POST = '/profileReducer///SET_UPDATE_LOAD_POST';
const SET_STATUS_LOAD_PROFILE = '/profileReducer///SET_STATUS_LOAD_PROFILE';


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

const profileReducer = (state = initialState,
												{type, post, profile, friendStatus, data, status, friendBtnState}) => {
	switch (type) {
		case SET_NEW_PROFILE: {
			return {...state, profile: profile}
		}
		case SET_STATUS_LOAD_PROFILE: {
			return {...state, loadProfile: true}
		}
		case SET_FRIEND_STATUS: {
			return {...state, friendStatus: friendStatus}
		}
		case SET_ADD_USER_AS_FRIEND: {
			return {...state, friendStatus: data}
		}
		case SET_DELL_USER_FROM_FRIENDS: {
			return {...state, friendStatus: data}
		}
		case SET_STATUS: {
			return {...state, status: status}
		}
		case SET_UPDATE_STATUS: {
			return {...state, status: status}
		}
		case SET_FRIEND_BTN_STATE: {
			return {...state, friendBtnState: friendBtnState}
		}
		case SET_NEW_POST: {
			return {...state, ...state.posts.unshift({text: post}), postsUpdate: true}
		}
		case SET_UPDATE_LOAD_POST: {
			return {...state, postsUpdate: data}
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
const setUpdateLoadPost = (data) => ({type: SET_UPDATE_LOAD_POST, data});
const setStatusLoadProfile = () => ({type: SET_STATUS_LOAD_PROFILE});


export const addNewPost = (post) => {
	return (dispatch) => {
		dispatch(setUpdateLoadPost(false));
		dispatch(setNewPost(post));
	}
};

export const getNewProfile = (userId) => {
	return async (dispatch) => {
		let data = await profileApi.getProfile(userId);
		await dispatch(setNewProfile(data));
		dispatch(setStatusLoadProfile())
	}
};


export const getFriendStatus = (userId) => {
	return async (dispatch) => {
		let data = await friendsApi.getFriendStatus(userId);
		dispatch(setFriendStatus(data))
	}
};





export const addUserAsFriend = (userId) => {
	return async (dispatch) => {
		dispatch(setFriendBtnState(false));
		let data = await friendsApi.addUsersAsFriend(userId);
		if (data.resultCode === 0)
			dispatch(setAddUserAsFriend(true));
		dispatch(setFriendBtnState(true))
	}
};

export const dellUserAsFriend = (userId) => {
	return async (dispatch) => {
		dispatch(setFriendBtnState(false));
		let data = await friendsApi.dellUsersAsFriend(userId);
		if (data.resultCode === 0)
			dispatch(setDellUserFromFriends(false));
		dispatch(setFriendBtnState(true))
	}
};





export const getStatus = (userId) => {
	return async (dispatch) => {
		let data = await profileApi.getUserStatus(userId);
		dispatch(setStatus(data))
	}
};
export const updateStatus = (status) => {
	return async (dispatch) => {
		let data = await profileApi.updateUserStatus(status);
		if (data.resultCode === 0)
			dispatch(setUpdateStatus(status))
	}
};

export default profileReducer;