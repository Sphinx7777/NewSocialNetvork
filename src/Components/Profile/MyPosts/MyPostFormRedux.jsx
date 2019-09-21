import React from 'react';
import s from './MyPosts.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "../../Validators/ValidatorsComponents";
import {minLengthCreator} from "../../Validators/CheckComponent";

const minlength3 = minLengthCreator(3);

const MyPostFormRedux = (props) => {


	return (
		<form className={s.myPostForm} onSubmit={props.handleSubmit(props.onSubmit)}>
			<div className={s.formInput}>
				<Field component={InputComponent} typeComponent='textarea' label='At least 3 characters every 5 seconds'
							 type='text' name='text' validate={[minlength3]}/>
			</div>
			<div>

				<button disabled={props.pristine || props.submitting} className={s.formButton}>Add new post</button>
			</div>
		</form>
	)
};

export default reduxForm({form: 'myPostForm'})(MyPostFormRedux);