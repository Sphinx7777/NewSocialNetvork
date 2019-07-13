
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

export const friendsApi = {
	getFriendStatus(userId) {
		return instans.get(`follow/${userId}`)
			.then(response => response.data)
	},
	addUsersAsFriend(userId) {
		return instans.post(`follow/${userId}`)
			.then(response => response.data)
	},
	dellUsersAsFriend(userId) {
		return instans.delete(`follow/${userId}`)
			.then(response => response.data)
	},

};

export const profileApi = {
	getProfile(userId) {
		return instans.get(`profile/${userId}`)
			.then(response => response.data)
	},


	getUserStatus (userId) {
		return instans.get(`profile/status/${userId}`)
			.then(response => response.data)
	},
	updateUserStatus (status) {
		return instans.put(`profile/status`, {status})
			.then(response => response.data)
	},


};

export const loginApi = {
	getMyLogin() {
		return instans.get('auth/me')
			.then(response => response.data)
	},
	doLoginMe(formData) {
		return instans.post('auth/login', {...formData})
			.then(response => response.data)
	},
};
