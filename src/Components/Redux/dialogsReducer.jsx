import {dialogsApi, usersApi} from "../Api/Api";


const SET_FRIEND_USERS = '/dialogsReducer///SET_FRIEND_USERS';
const SET_TOTAL_COUNT = '/dialogsReducer///SET_TOTAL_COUNT';
const SET_FRIEND_LOAD = '/dialogsReducer///SET_FRIEND_LOAD';
const SET_MY_MESSAGES = '/dialogsReducer///SET_MY_MESSAGES';
const SET_STATUS_SEND_MESSAGE = '/dialogsReducer///SET_STATUS_SEND_MESSAGE';
const SET_FRIEND_MESSAGES = '/dialogsReducer///SET_FRIEND_MESSAGES';
const SET_STATUS_FRIEND_MESSAGES = '/dialogsReducer///SET_STATUS_FRIEND_MESSAGES';


let initialState = {
	users: [],
	friendMessages: [
		{addedAt: "2019-09-25T10:06:48.253",
			body: "dfsdfds ddf vdfdf xddf dfdfd",
			id: "debf07c4-33e9-4f2f-b855-4f95c563463d",
			recipientId: 1184,
			senderId: 1715,
			senderName: "Sphinx",
			translatedBody: null,
			viewed: true},

	],
	myMessages: [
		{addedAt: "2019-09-25:66:66.66",
			body: "initialState messages",
			deletedByRecipient: false,
			deletedBySender: false,
			distributionId: null,
			id: "000000",
			isSpam: false,
			recipientId: 1184,
			recipientName: "Sfinx",
			senderId: 1715,
			senderName: "Sphinx",
			translatedBody: null,
			viewed: false
		},
		{addedAt: "2019-09-25T09:31:22.49",
			body: "body лторгр огргргр гргргр",
			deletedByRecipient: false,
			deletedBySender: false,
			distributionId: null,
			id: "5d4526ac-d036-46fe-9dd9-b3cc8f5b90e6",
			isSpam: false,
			recipientId: 1184,
			recipientName: "Sfinx",
			senderId: 1715,
			senderName: "Sphinx",
			translatedBody: null,
			viewed: false
		},

	],
	totalCount: null,
	page: 1,
	friendLoaded: null,
	sendMessageStatus : false,
	loadFriendMessages : false,


};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FRIEND_USERS: {

			return {...state, ...state.users.push(...action.users.filter(u => u.followed)), page: state.page + 1}
		}
		case SET_TOTAL_COUNT: {
			return {...state, totalCount: action.totalCount}
		}
		case SET_FRIEND_LOAD: {
			return {...state, friendLoaded: true}
		}
		case SET_MY_MESSAGES: {
			return {...state, ...state.myMessages.unshift({...action.data}),sendMessageStatus:true}
		}
		case SET_FRIEND_MESSAGES: {
			return {...state, ...state.friendMessages.unshift(...action.items)}
		}
		case SET_STATUS_SEND_MESSAGE: {
			return {...state, sendMessageStatus:action.status}
		}
		case SET_STATUS_FRIEND_MESSAGES: {
			return {...state, loadFriendMessages:action.status}
		}
		default:
			return state;
	}
};

const setFriends = (users) => ({type: SET_FRIEND_USERS, users});
const setTotalCountOfUsers = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
const setFriendLoad = () => ({type: SET_FRIEND_LOAD});
const setMyMessages = (data) => ({type: SET_MY_MESSAGES,data});
const setStatusSendMessage = (status) => ({type: SET_STATUS_SEND_MESSAGE,status});
const setStatusFriendMessages = (status) => ({type: SET_STATUS_FRIEND_MESSAGES,status});
const setFriendMessages = (items) => ({type: SET_FRIEND_MESSAGES,items});


export const getUsersForFriends = (page = 1, count = 100) => {
	return async (dispatch) => {
		let data = await usersApi.getUsers(page, count);
		await dispatch(setTotalCountOfUsers(data.totalCount));
		let countPage=Math.ceil(data.totalCount/100);
		for (page; page <= countPage; page++) {
			let data = await usersApi.getUsers(page, count);
			dispatch(setFriends(data.items,));
		}
		dispatch(setFriendLoad());

	}
};
export const sendNewMessage = (id,text) => {
	return async (dispatch) => {
		let data = await dialogsApi.sendNewMessage(id,text);
		if (data.resultCode === 0) {
			dispatch(setMyMessages(data.data.message));
			dispatch(setStatusSendMessage(false));
		}
	}
};
export const getFriendMessage = (id) => {
	return async (dispatch) => {
		let data = await dialogsApi.getFiendMessage(id);
		if (!data.error) {
			await dispatch(setFriendMessages(data.items));
			await dispatch(setStatusFriendMessages(true));
		}
	}
};


export default dialogsReducer;