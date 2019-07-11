import {usersApi} from "../Api/Api";

const SET_NEW_USERS = 'SET_NEW_USERS';
const SET_TOTAL_NUMBERS_OF_USERS = 'SET_TOTAL_NUMBERS_OF_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';



let initialState = {
	users: [],
	totalNumberOfUsers: null,
	currentPage: 1,
	numberUsersOnPage: 5,
	loadedUsers: false
};

const usersReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_NEW_USERS: {
			return {...state, users:action.users,loadedUsers:true}
		}
		case SET_TOTAL_NUMBERS_OF_USERS: {
			return {...state, totalNumberOfUsers:action.totalCount}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage:action.currentPage}
		}
		default:
			return state;
	}};

const setNewUsers = (users) => ({type:SET_NEW_USERS, users});
const setTotalNumberOfUsers = (totalCount) => ({type:SET_TOTAL_NUMBERS_OF_USERS, totalCount});
const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});



export const getNewUsers = (currentPage, numberUsersOnPage) => {
	return (dispatch) => {
		dispatch(setCurrentPage(currentPage));
		usersApi.getUsers(currentPage, numberUsersOnPage)
			.then(data => {
			 dispatch(setNewUsers(data.items));
			 dispatch(setTotalNumberOfUsers(data.totalCount));
			})

	}
};

export default usersReducer;