import React from 'react';
import {News} from "./News";
import {connect} from "react-redux";
import {getNews, searchNews, setNumberPerPage} from "../Redux/newsReducer";



class NewsContainer extends React.Component  {

	componentDidMount() {
		this.props.getNews(this.props.currentPage,this.props.hitsPerPage)
	}
	componentDidUpdate(prevProps) {
		if (prevProps.hitsPerPage !== this.props.hitsPerPage) {
			this.props.getNews(this.props.currentPage,this.props.hitsPerPage)
		}
	}

	render() {
		let {currentPage,news,getNews,hitsPerPage,searchNews,setNumberPerPage} = this.props;

		return <News {...{currentPage,news,getNews,hitsPerPage,searchNews,setNumberPerPage}}/>
}


}
export default connect((state)=>({
	currentPage:state.newsPage.currentPage,
	news:state.newsPage.news,
	hitsPerPage:state.newsPage.hitsPerPage,
}),{getNews,searchNews,setNumberPerPage})(NewsContainer);