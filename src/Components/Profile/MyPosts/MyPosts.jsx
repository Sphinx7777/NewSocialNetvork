import React from 'react';
import s from './MyPosts.module.scss';
import MyPostFormRedux from "./MyPostFormRedux";
import {connect} from "react-redux";
import {addNewPost} from "../../Redux/profileReducer";






class MyPosts extends React.Component {
	onSubmit = (values) => {
		this.props.addNewPost(values.text);
	};


	render() {
	return (
		<div className={s.myPostsWrapper}>
			<div className={s.myPostFormWrapper}>
				<MyPostFormRedux onSubmit={this.onSubmit}/>
			</div>
			<div className={s.myPosts}>
				{this.props.posts.map((m,index) => {
					return (
						<div key={index} className={s.post}>
							<div className={s.userInfo}>
								<img src={this.props.photos.small} alt=""/>
								<span>{this.props.fullName}</span>
							</div>
							<div>
								<label>{m.text}</label>
							</div>
						</div>
					)})}
			</div>
		</div>
	)}
}
let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		postsUpdate: state.profilePage.postsUpdate
	}
};


export default connect(mapStateToProps, {addNewPost})(MyPosts);