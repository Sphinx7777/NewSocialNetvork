import React from 'react';
import s from './Dialogs.module.scss';
import {Field,reduxForm} from "redux-form";

import {emptyField, minLengthCreator} from "../Validators/CheckComponent";



let minLength3=minLengthCreator(3);

const DialogsReduxForm = (props) => {

	return (
		<form   onSubmit={props.handleSubmit(props.onSubmit)}>
			<span className={s.newDialogMinimum}>"Minimum 3 symbols"</span>
			<div className={s.newDialogForm}>
			<button className={s.newDialogBtn} disabled={!props.postSend}>Send message</button>

       <Field className={s.newDialogText} placeholder={'Minimum 3 symbols...'}
							component={'textarea'} name={'newTextDialog'} type={'text'}
							validate={[minLength3,emptyField]}
			 />
			</div>
		</form>
	)
};
export default reduxForm({form: 'newDialogText'})(DialogsReduxForm);






