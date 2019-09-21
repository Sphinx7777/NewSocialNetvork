import React from 'react';
import s from './DialogsReduxForm.module.scss';
import {Field,reduxForm} from "redux-form";

import {minLengthCreator} from "../Validators/CheckComponent";
import {InputComponent} from "../Validators/ValidatorsComponents";



let minLength3=minLengthCreator(3);

const DialogsReduxForm = (props) => {

	return (
		<form  className={s.newDialogForm} onSubmit={props.handleSubmit(props.onSubmit)}>
			<Field className={s.newDialogText}
							component={InputComponent}
							 cols='40' rows='3' name={'newTextDialog'} type={'text'} typeComponent='textarea'
							validate={[minLength3]}
			 />
				<div className={s.newDialogBtn}>
					<button className={s.Btn} disabled={props.pristine || props.submitting}>Send message</button>
					<button className={s.clearBtn} type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>
						Clear Values
					</button>
				</div>

		</form>
	)
};
export default reduxForm({form: 'newDialogText'})(DialogsReduxForm);






