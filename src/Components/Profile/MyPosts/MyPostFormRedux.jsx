import React from 'react';
import s from './MyPosts.module.scss';
import {Field, reduxForm} from "redux-form";


const MyPostFormRedux = (props) => {

	return (
		<form className={s.myPostForm} onSubmit={props.handleSubmit(props.onSubmit)}>
			<div className={s.formInput}>
				<Field component='input' type='text' name='text'/>
			</div>
			<div>
				<button className={s.formButton}>Add new post</button>
			</div>
		</form>
	)
};

export default reduxForm({form: 'myPostForm'})(MyPostFormRedux);