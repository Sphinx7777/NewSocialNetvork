import {newsApi} from "../Api/Api";


const SET_NEWS = '/authReducer///SET_NEWS';
const SET_NUMBER_PER_PAGE = '/authReducer///SET_NUMBER_PER_PAGE';
const SET_CURRENT_PAGE = '/authReducer///SET_CURRENT_PAGE';



let initialState = {
	news: [],
	currentPage: 1,
	hitsPerPage: 10,
	totalCountUsers: 1000,


};

const newsReducer = (state = initialState, {type, hits,number,currentPage}) => {
	switch (type) {
		case SET_NEWS: {
			return {...state, news:hits}
		}
		case SET_NUMBER_PER_PAGE: {
			return {...state,  hitsPerPage:number,}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage:currentPage,}
		}
		default:
			return state;
	}
};

const setNews = (hits) => ({type: SET_NEWS, hits});
export const setNumberPerPage = (number) => ({type: SET_NUMBER_PER_PAGE, number});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});


export const getNews = (currentPage,hitsPerPage) =>
	async (dispatch) => {
	let news = await newsApi.getNews(currentPage,hitsPerPage);
	if (news.status === 200) {
		dispatch(setNews(news.data.hits));
		dispatch(setCurrentPage(currentPage));
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