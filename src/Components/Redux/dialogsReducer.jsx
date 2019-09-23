import {usersApi} from "../Api/Api";

const SET_FRIEND_USERS = '/dialogsReducer///SET_FRIEND_USERS';
const SET_TOTAL_COUNT = '/dialogsReducer///SET_TOTAL_COUNT';
const SET_FRIEND_LOAD = '/dialogsReducer///SET_FRIEND_LOAD';


let initialState = {
	users: [],
	userAnswers: [
		{id: 1, answered: 'Прив..нормуль'},
		{id: 2, answered: 'Везет..я тоже хо..'},
	],
	myPost: [
		{id: 1, post: 'Привет...как дела'},
		{id: 2, post: 'Скоро на море поеду'},
	],
	totalCount: null,
	page: 1,
	friendLoaded: null


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
		default:
			return state;
	}
};

const setFriends = (users) => ({type: SET_FRIEND_USERS, users});
const setTotalCountOfUsers = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
const setFriendLoad = () => ({type: SET_FRIEND_LOAD});


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


export default dialogsReducer;