import React from 'react';
import s from './DialogsReduxForm.module.scss';
import {Field, reduxForm} from "redux-form";
import {minLengthCreator} from "../Validators/CheckComponent";
import {TextAreaComponent} from "../Validators/ValidatorsComponents";

const minLength3 = minLengthCreator(3);

const DialogsReduxForm = (
	{
		pristine,
		handleSubmit,
		submitting,
		reset
	}) => {

	const onPressEnter = (event) => {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	};

	return (
		<form className={s.newDialogForm}
					onSubmit={handleSubmit}
					onKeyPressCapture={onPressEnter}>
			<Field
				cols='170'
				rows='3'
				name={'newTextDialog'}
				label='At least 3 characters every 5 seconds'
				component={TextAreaComponent}
				validate={[minLength3]}
			/>
			<div className={s.newDialogBtn}>
				<button className={s.Btn}
								disabled={pristine || submitting}>
					Send message
				</button>
				<button className={s.clearBtn}
								type="reset"
								disabled={pristine}
								onClick={reset}>
					Clear field
				</button>
			</div>
		</form>
	)
};
export default reduxForm({form: 'newDialogText'})(DialogsReduxForm);






