import React from 'react';
import s from './MyPosts.module.scss';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Validators/ValidatosComponents";






const MyPostFormRedux = (props) => {


	return (
		<form className={s.myPostForm} onSubmit={props.handleSubmit(props.onSubmit)}>

			<div className={s.formInput}>
				<Field component={Textarea}  placeholder='New text minimum 3 symbols...'
							 type='text' name='text' validate={[]}/>
			</div>
			<div>
				<button disabled={!props.postsUpdate} className={s.formButton}>Add new post</button>
			</div>
		</form>
	)
};

export default reduxForm({form: 'myPostForm'})(MyPostFormRedux);