import * as axios from "axios";


let instans = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {
		'API-KEY': '82fcf4a4-b6c7-4186-a174-dfde5a4494be'
	}
});

export const usersApi = {
	getUsers(currentPage, numberUsersOnPage) {
		return instans.get(`users/?page=${currentPage}&count=${numberUsersOnPage}`)
			.then(response => response.data)
	}
};

export const profileApi = {
	getProfile(userId) {
		return instans.get(`profile/${userId}`)
			.then(response => response.data)
	},
	getMyLogin() {
		return instans.get('auth/me')
			.then(response => response.data)
	}

};