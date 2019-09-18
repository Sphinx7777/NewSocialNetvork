import {newsApi} from "../Api/Api";


const SET_NEWS = '/authReducer///SET_NEWS';
const SET_NUMBER_PER_PAGE = '/authReducer///SET_NUMBER_PER_PAGE';



let initialState = {
	news: [],
	currentPage: 1,
	hitsPerPage: 20,
	totalCountUsers: 1000,


};

const newsReducer = (state = initialState, {type, hits,number}) => {
	switch (type) {
		case SET_NEWS: {
			return {...state, news:hits}
		}
		case SET_NUMBER_PER_PAGE: {
			return {...state, hitsPerPage:number}
		}
		default:
			return state;
	}
};

const setNews = (hits) => ({type: SET_NEWS, hits});
export const setNumberPerPage = (number) => ({type: SET_NUMBER_PER_PAGE, number});


export const getNews = (currentPage,hitsPerPage) =>
	async (dispatch) => {
	let news = await newsApi.getNews(currentPage,hitsPerPage);
	if (news.status === 200) {
		dispatch(setNews(news.data.hits));
	}
};
export const searchNews = (searchValue,hitsPerPage) =>
	async (dispatch) => {
	let news = await newsApi.searchNews(searchValue,hitsPerPage);
	if (news.status === 200) {
		dispatch(setNews(news.data.hits));
	}
};


export default newsReducer;