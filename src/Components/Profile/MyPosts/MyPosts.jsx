import React from 'react';
import s from './MyPosts.module.scss';
import MyPostFormRedux from "./MyPostFormRedux";
import {connect} from "react-redux";
import {addNewPost} from "../../Redux/profileReducer";
import photo from './../../../Images/skull2.png';






class MyPosts extends React.Component {
	onsSubmit = (values) => {

if(!values.text)return alert('Write message minimum 1 symbol..');
if(values.text.length >=1) {
		this.props.addNewPost(values.text);}

	};


	render() {
	return (
		<div className={s.myPostsWrapper}>
			{this.props.userId === this.props.loginId ?
				<div className={s.myPostFormWrapper}>
				<MyPostFormRedux postsUpdate={this.props.postsUpdate} onsSubmit={this.onsSubmit}/>
				</div> : <></>
			}
			<div className={s.myPosts}>
				{this.props.posts.map((m,index) => {
					return (
						<div key={index} className={s.post}>
							<div className={s.userInfo}>
								<img className={s.userInfoPhoto} src={!this.props.photos.small ? photo : this.props.photos.small} alt=""/>
								<span className={s.userInfoText}>{this.props.fullName}</span>
							</div>
							<div className={s.postText}>
								<label className={s.postTextLabel}>{m.text}</label>
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
		postsUpdate: state.profilePage.postsUpdate,
	}
};


export default connect(mapStateToProps, {addNewPost})(MyPosts);