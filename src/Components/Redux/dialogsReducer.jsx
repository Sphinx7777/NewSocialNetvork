import {dialogsApi, usersApi} from "../Api/Api";


const SET_FRIEND_USERS = '/dialogsReducer///SET_FRIEND_USERS';
const SET_TOTAL_COUNT = '/dialogsReducer///SET_TOTAL_COUNT';
const SET_STATUS_FRIEND_LOADED = '/dialogsReducer///SET_STATUS_FRIEND_LOADED';
const SET_STATUS_SEND_MESSAGE = '/dialogsReducer///SET_STATUS_SEND_MESSAGE';
const SET_MESSAGES = '/dialogsReducer///SET_MESSAGES';


let initialState = {
	friends: [],
	allMessages: [],
	totalCount: null,
	page: 1,
	friendLoaded: null,
	sendMessageStatus: false,
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_FRIEND_USERS: {
			return {
				...state, ...state.friends.push(...action.users.filter(u => u.followed)),
				page: state.page + 1
			}
		}

		case SET_TOTAL_COUNT: {
			return {...state, totalCount: action.totalCount}
		}

		case SET_STATUS_FRIEND_LOADED: {
			return {...state, friendLoaded: true}
		}

		case SET_MESSAGES: {
			return {...state, allMessages: action.items}
		}

		case SET_STATUS_SEND_MESSAGE: {
			return {...state, sendMessageStatus: action.status}
		}

		default:
			return state;
	}
};

export const setFriends = (users) => ({type: SET_FRIEND_USERS, users});
const setTotalCountOfUsers = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
const setStatusFriendLoaded = () => ({type: SET_STATUS_FRIEND_LOADED});
const setStatusSendMessage = (status) => ({type: SET_STATUS_SEND_MESSAGE, status});
const setMessages = (items) => ({type: SET_MESSAGES, items});


export const getUsersForFriends = (page = 1, count = 100) => {
	return async (dispatch) => {
		let data = await usersApi.getUsers(page, count);
		await dispatch(setTotalCountOfUsers(data.totalCount));
		let countPage = Math.ceil(data.totalCount / 100);
		for (page; page <= countPage; page++) {
			let data = await usersApi.getUsers(page, count);
			dispatch(setFriends(data.items,));
		}
		dispatch(setStatusFriendLoaded());
	}
};

export const sendNewMessage = (id, text) => {
	return async (dispatch) => {
		let data = await dialogsApi.sendNewMessage(id, text);
		if (data.resultCode === 0) {
			dispatch(setStatusSendMessage(true));
		}
	}
};

export const deleteMessage = (messageId, userId) => {
	return async (dispatch) => {
		let data = await dialogsApi.deleteMessage(messageId);
		if (data.resultCode === 0) {
			dispatch(getMessages(userId))
		}
	}
};

export const getMessages = (id) => {
	return async (dispatch) => {
		let data = await dialogsApi.getMessage(id);
		if (!data.error) {
			await dispatch(setMessages(data.items));
		}
	}
};

export default dialogsReducer;