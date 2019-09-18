
import * as axios from "axios";



let instans = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {
		'API-KEY': 'db1d40cc-4208-4f37-bc5e-856605c7e662'
	}
});

export const newsApi = {
	getNews(currentPage,hitsPerPage) {
		return axios.get(`https://hn.algolia.com/api/v1/search?page=${currentPage}&hitsPerPage=${hitsPerPage}`)
	},
	searchNews(searchValue,hitsPerPage) {
		return axios.get(`https://hn.algolia.com/api/v1/search?query=${searchValue}&hitsPerPage=${hitsPerPage}`)
	},
};


export const usersApi = {
	getUsers(currentPage, numberUsersOnPage) {
		return instans.get(`users/?page=${currentPage}&count=${numberUsersOnPage}`)
			.then(response => response.data)
	},
	searchUser(name) {
		return instans.get(`users/?term=${name}`)
			.then(response => response.data)
	},
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
	loginMe(formData) {
		return instans.post('auth/login', {...formData})
			.then(response => response.data)
	},
	logOutMe() {
		return instans.delete('auth/login')
			.then(response => response.data)
	},
};

export const SettingsApi = {

	sendFormSettings(formData) {
		return instans.put('profile', {...formData})
			.then(response => response.data)
	},
	sendUserPhoto(photo) {
		return instans.put('profile/photo', photo, {
			headers:{
				'Content-Type': 'multipart/form-data',
			}
		})
			.then(response => response.data)
	},
};



