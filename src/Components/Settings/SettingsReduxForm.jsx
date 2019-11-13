import React from 'react';
import s from './Settings.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "../Validators/ValidatorsComponents";


const SettingsReduxForm = (props) => {

	const {
		handleSubmit,
		pristine,
		reset,
		submitting,
		submitFinished
	} = props;

	let stop = () => {
		props.setSubmitFinished()
	};

	if (submitFinished) {
		setTimeout(stop, 3000)
	}

	return (
		<div className={s.settingsFormWrapper}>
			<form onSubmit={handleSubmit}>
				<div className={
					props.submitFinished
						? s.settingsForm + ' ' + s.active
						: s.settingsForm
				}>
					<div className={s.contacts}>
						<span className={s.titleAboutMe}>
							Contacts
						</span>
						<Field
							name='contacts.skype'
							type='text'
							label='skype'
							component={InputComponent}
							validate={[]}
						/>
						<Field
							name='contacts.facebook'
							type='text'
							label='facebook'
							component={InputComponent}
							validate={[]}
						/>
						<Field
							name='contacts.instagram'
							type='text'
							label='instagram'
							component={InputComponent}
							validate={[]}
						/>
						<Field
							name='contacts.vk'
							type='text'
							label='vk'
							component={InputComponent}
							validate={[]}
						/>
						<Field
							name='contacts.website'
							type='text'
							label='My website'
							component={InputComponent}
							validate={[]}
						/>
						<Field
							name='contacts.github'
							type='text'
							label='Git'
							component={InputComponent}
							validate={[]}
						/>
					</div>
					<div className={s.description}>
						<span className={s.titleAboutMe}>
							About me
						</span>
						<Field
							name='fullName'
							type='text'
							label='fullName'
							component={InputComponent}
							validate={[]}
						/>
						<Field
							name='aboutMe'
							type='text'
							label='aboutMe'
							component={InputComponent}
							validate={[]}
						/>
						<Field
							name='lookingForAJobDescription'
							type='text'
							label='lookingForAJobDescription'
							component={InputComponent}
							validate={[]}
						/>
						<Field
							name='lookingForAJob'
							type='checkbox'
							label='lookingForAJob'
							component={InputComponent}
							validate={[]}
						/>
						<button className={s.sendBtn}
										type="submit"
										disabled={pristine || submitting}>
							To send
						</button>
						<button className={s.sendBtn}
										disabled={pristine}
										onClick={reset}>
							Clear fields
						</button>
					</div>

				</div>
				{props.error &&
				<div className={s.settingsErrorForm}>
					<span className={s.errorForm}>
						{props.error}
					</span>
				</div>}
				{props.submitFinished &&
				<div className={s.submitFinished}>
					<span className={s.finishedForm}>
						Данные успешно обновлены
					</span>
				</div>}
			</form>
		</div>
	)
};

export default reduxForm({
	form: 'settingsForm'
})(SettingsReduxForm)