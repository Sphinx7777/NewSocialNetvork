import React from 'react';
import s from './DialogsReduxForm.module.scss';
import {Field,reduxForm} from "redux-form";

import {minLengthCreator} from "../Validators/CheckComponent";
import {TextAreaComponent} from "../Validators/ValidatorsComponents";



let minLength3=minLengthCreator(3);

const DialogsReduxForm = (props) => {

	return (
		<form  className={s.newDialogForm} onSubmit={props.handleSubmit(props.onSubmit)}>
			<Field className={s.newDialogText}
						 component={TextAreaComponent}
						 cols='170' rows='2' name={'newTextDialog'}
						 validate={[minLength3]} label='At least 3 characters every 5 seconds'

			/>
			<div className={s.newDialogBtn}>
				<button className={s.Btn} disabled={props.pristine || props.submitting}>Sent message</button>
				<button className={s.clearBtn} type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>
					Clear field
				</button>

			</div>

		</form>
	)
};
export default reduxForm({form: 'newDialogText'})(DialogsReduxForm);






