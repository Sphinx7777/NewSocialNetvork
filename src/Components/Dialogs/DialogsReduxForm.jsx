import React from 'react';
import s from './Dialogs.module.scss';
import {Field,reduxForm} from "redux-form";




const DialogsReduxForm = (props) => {

	return (
		<form  className={s.newDialogForm} onSubmit={props.handleSubmit(props.onSubmit)}>
			<div>
			<button className={s.newDialogBtn} disabled={!props.postSend}>Send message</button>
			</div>
       <Field className={s.newDialogText} placeholder={'New text please...'} component={'textarea'} name={'newTextDialog'} type={'text'}/>

		</form>
	)
};
export default reduxForm({form: 'newDialogText'})(DialogsReduxForm);






