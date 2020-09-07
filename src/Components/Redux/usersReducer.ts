import {usersApi} from "../Api/Api";
import { IUsersPage, IUser } from "../common";

const SET_NEW_USERS = '/usersReducer///SET_NEW_USERS';
const SET_TOTAL_NUMBERS_OF_USERS = '/usersReducer///SET_TOTAL_NUMBERS_OF_USERS';
const SET_CURRENT_PAGE = '/usersReducer///SET_CURRENT_PAGE';
const SET_NUMBER_USERS_ON_PAGE = '/usersReducer///SET_NUMBER_USERS_ON_PAGE';
const SET_LOAD_USERS = '/usersReducer///SET_LOAD_USERS';

interface IUsersAction {
    type: string;
	users: IUser[];
	status: number;
	totalCount: number;
	currentPage: number;
	numberUsersOnPage: number;

}

let initialState: IUsersPage = {
	users: [],
	totalNumberOfUsers: null,
	currentPage: 1,
	numberUsersOnPage: 5,
	loadedUsers: false
};

const usersReducer = (state: IUsersPage = initialState, action: IUsersAction) => {
	switch (action.type) {

		case SET_NEW_USERS: {
			return {...state, users: action.users}
		}

		case SET_LOAD_USERS: {
			return {...state, loadedUsers: action.status}
		}

		case SET_TOTAL_NUMBERS_OF_USERS: {
			return {...state, totalNumberOfUsers: action.totalCount}
		}

		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}

		case SET_NUMBER_USERS_ON_PAGE: {
			return {...state, numberUsersOnPage: action.numberUsersOnPage}
		}

		default:
			return state;
	}
};

const setNewUsersAC = (users: IUser[]) => ({type: SET_NEW_USERS, users});
const setLoadUsersAC = (status: boolean) => ({type: SET_LOAD_USERS, status});
const setTotalNumberOfUsersAC = (totalCount: number) => (
	{
		type: SET_TOTAL_NUMBERS_OF_USERS, totalCount
	});
const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
export const SetNumberUsersOnPageAC = (numberUsersOnPage: number) => (
	{
		type: SET_NUMBER_USERS_ON_PAGE, numberUsersOnPage
	});


export const getNewUsers = (currentPage: number, numberUsersOnPage: number) => {
	return async (dispatch: any) => {
		dispatch(setLoadUsersAC(false));
		dispatch(setCurrentPageAC(currentPage));
		let data = await usersApi.getUsers(currentPage, numberUsersOnPage);
		dispatch(setNewUsersAC(data.items));
		dispatch(setTotalNumberOfUsersAC(data.totalCount));
		dispatch(setLoadUsersAC(true));
	}
};

export const searchUsers = (name: string) => {
	return async (dispatch: any) => {
		/*dispatch(setLoadUsersAC(false));*/
		let data = await usersApi.searchUser(name);
		dispatch(setNewUsersAC(data.items));
		/*dispatch(setLoadUsersAC(true));*/
	}
};


export default usersReducer;