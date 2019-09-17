import React from 'react';
import {News} from "./News";
import {connect} from "react-redux";
import {getNews} from "../Redux/newsReducer";






class NewsContainer extends React.Component  {

	componentDidMount() {
		this.props.getNews()
	}
	/*componentDidUpdate(prevProps, prevState, snapshot) {
		prevProps.news !== this.props.news && this.render()
	}*/

	render() {
	return <News currentPage={this.props.currentPage} news={this.props.news} getNews={this.props.getNews}/>
}


}
export default connect((state)=>({
	currentPage:state.newsPage.currentPage,
	news:state.newsPage.news,
}),{getNews})(NewsContainer);