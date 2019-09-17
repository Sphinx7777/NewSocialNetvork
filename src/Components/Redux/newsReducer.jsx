import {newsApi} from "../Api/Api";


const SET_NEWS = '/authReducer///SET_NEWS';



let initialState = {
	news: [],
	currentPage: 2,
};

const newsReducer = (state = initialState, {type, hits}) => {
	switch (type) {
		case SET_NEWS: {
			return {...state, news:hits}
		}
		default:
			return state;
	}
};

const setNews = (hits) => ({type: SET_NEWS, hits});


export const getNews = (SearchType,searchString,currentPage,tags) =>
	async (dispatch) => {
	let news = await newsApi.getNews(SearchType,searchString,currentPage,tags);
	if (news.status === 200) {
		dispatch(setNews(news.data.hits));
	}
};


export default newsReducer;