import React from 'react';
import s from './MyPosts.module.scss';
import {Field, reduxForm} from "redux-form";


const MyPostFormRedux = (props) => {


	return (
		<form className={s.myPostForm} onSubmit={props.handleSubmit(props.onsSubmit)}>
			<span className={s.formInputMinimum}>"Minimum 1 symbol"</span>
			<div className={s.formInput}>
				<Field component='textarea' placeholder={'New text minimum 1 symbol..'} type='text' name='text'/>
			</div>
			<div>
				<button disabled={!props.postsUpdate} className={s.formButton}>Add new post</button>
			</div>
		</form>
	)
};

export default reduxForm({form: 'myPostForm'})(MyPostFormRedux);