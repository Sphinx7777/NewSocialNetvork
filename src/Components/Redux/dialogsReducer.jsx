

const SET_NEW_POST = '/dialogsReducer///SET_NEW_PROFILE';
const SET_POST_STATUS = '/dialogsReducer///SET_POST_STATUS';



let initialState = {
userAnswers: [
	{id:1, answered:'Прив..нормуль'},
	{id:2, answered:'Везет..я тоже хо..'},
],
	myPost: [
		{id:1, post:'Привет...как дела'},
		{id:2, post:'Скоро на море поеду'},
	],
	postSend: true,
	answersLoad: null,

};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NEW_POST: {
			return {...state, ...state.myPost.unshift({id: state.myPost.length+2, post:action.text}),postSend:true}
		}
		case SET_POST_STATUS: {
			return {...state, postSend:action.status}
		}
		default:
			return state;
	}
};

const setNewPost = (text) => ({type: SET_NEW_POST, text});
const setPostStatus = (status) => ({type: SET_POST_STATUS, status});



export const addNewPost = (text) => {
	return (dispatch) => {
		dispatch(setPostStatus(false));
		dispatch(setNewPost(text));


	}
};







export default dialogsReducer;