import React from 'react';
import s from './Dialogs.module.scss';
import {Field,reduxForm} from "redux-form";

import {minLengthCreator} from "../Validators/CheckComponent";
import {InputComponent} from "../Validators/ValidatosComponents";



let minLength3=minLengthCreator(3);

const DialogsReduxForm = (props) => {

	return (
		<form   onSubmit={props.handleSubmit(props.onSubmit)}>
			<div className={s.newDialogForm}>

				<Field className={s.newDialogText} label={'Minimum 3 symbols every 5 seconds'}
							component={InputComponent} readonly
							 cols='40' rows='5' name={'newTextDialog'} type={'text'} typeComponent='textarea'
							validate={[minLength3]}
			 />
				<div className={s.newDialogBtn}>
					<button className={s.Btn} disabled={props.pristine || props.submitting}>Send message</button>
				</div>
			</div>
		</form>
	)
};
export default reduxForm({form: 'newDialogText'})(DialogsReduxForm);






