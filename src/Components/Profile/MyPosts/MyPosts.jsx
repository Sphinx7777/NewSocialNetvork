import React from 'react';
import s from './MyPosts.module.scss';
import MyPostFormRedux from "./MyPostFormRedux";
import {connect} from "react-redux";
import {addNewPost} from "../../Redux/profileReducer";
import photo from './../../../Images/skull2.png';

const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));

class MyPosts extends React.PureComponent {

	onSubmit = (formData) => {
		this.props.addNewPost(formData.text);
		return disableBtnSend(5000).then(() => {
			return true;
		})
	};


	render() {

		const {
			postsUpdate,
			posts,
			photos,
			fullName
		} = this.props;

		return (
			<div className={s.myPostsWrapper}>
				{this.props.userId === this.props.loginId
					? <div className={s.myPostFormWrapper}>
						<MyPostFormRedux {...{
							postsUpdate,
							onSubmit: this.onSubmit
						}}/>
					</div>
					: <></>
				}
				<div className={s.myPosts}>
					{posts.map((m, index) => {
						return (
							<div key={index} className={s.post}>
								<div className={s.userInfo}>
									<img className={s.userInfoPhoto}
											 src={!photos.small
												 ? photo
												 : photos.small}
											 alt=""
									/>
									<span className={s.userInfoText}>
										{fullName}
									</span>
								</div>
								<div className={s.postText}>
									<label className={s.postTextLabel}>
										{m.text}
									</label>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		postsUpdate: state.profilePage.postsUpdate,
	}
};


export default connect(mapStateToProps, {addNewPost})(MyPosts);