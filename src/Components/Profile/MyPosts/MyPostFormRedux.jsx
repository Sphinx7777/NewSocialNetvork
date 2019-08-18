import React from 'react';
import s from './MyPosts.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "../../Validators/ValidatosComponents";
import {emptyField, minLengthCreator} from "../../Validators/CheckComponent";

const minlength3 = minLengthCreator(3);

const MyPostFormRedux = (props) => {

	return (
		<form className={s.myPostForm} onSubmit={props.handleSubmit(props.onSubmit)}>
			<div className={s.formInput}>
				<Field component={InputComponent} typeComponent='textarea' label='New text minimum 3 symbols...'
							 type='text' name='text' validate={[minlength3,emptyField]}/>
			</div>
			<div>
				<button disabled={!props.postsUpdate} className={s.formButton}>Add new post</button>
			</div>
		</form>
	)
};

export default reduxForm({form: 'myPostForm'})(MyPostFormRedux);