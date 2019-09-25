import React from 'react';
import s from './DialogsReduxForm.module.scss';
import {Field,reduxForm} from "redux-form";

import {minLengthCreator} from "../Validators/CheckComponent";
import {TextAreaComponent} from "../Validators/ValidatorsComponents";



let minLength3=minLengthCreator(3);

const DialogsReduxForm = ({pristine,handleSubmit,submitting,reset}) => {

	return (
		<form  className={s.newDialogForm} onSubmit={handleSubmit} onKeyPressCapture={(event) => {

			if (event.key === 'Enter') {
				handleSubmit()
			}
		}} >
			<Field
						 component={TextAreaComponent}
						 cols='170' rows='3' name={'newTextDialog'}
						 validate={[minLength3]} label='At least 3 characters every 5 seconds'

			/>
			<div className={s.newDialogBtn}>
				<button className={s.Btn} disabled={pristine || submitting}>Send message</button>
				<button className={s.clearBtn} type="button" disabled={pristine} onClick={reset}>
					Clear field
				</button>

			</div>

		</form>
	)
};
export default reduxForm({form: 'newDialogText'})(DialogsReduxForm);






