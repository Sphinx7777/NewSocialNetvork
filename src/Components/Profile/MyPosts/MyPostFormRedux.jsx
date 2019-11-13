import React from 'react';
import s from './MyPosts.module.scss';
import {Field, reduxForm} from "redux-form";
import {TextAreaComponent} from "../../Validators/ValidatorsComponents";
import {minLengthCreator} from "../../Validators/CheckComponent";

const minlength3 = minLengthCreator(3);

const MyPostFormRedux = (props) => {

	const {handleSubmit, onSubmit} = props;

	return (
		<form className={s.myPostForm}
					onSubmit={handleSubmit(onSubmit)}>
			<div className={s.formInput}>
				<Field component={TextAreaComponent}
							 label='At least 3 characters every 5 seconds'
							 name='text'
							 validate={[minlength3]}/>
			</div>
			<div>
				<button className={s.formButton}
								disabled={props.pristine || props.submitting}>
					Add new post
				</button>
			</div>
		</form>
	)
};

export default reduxForm({form: 'myPostForm'})(MyPostFormRedux);