import React from 'react';
import s from './Settings.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "../Validators/ValidatorsComponents";


const SettingsReduxForm = (props) => {

	const {handleSubmit, pristine, reset, submitting, submitFinished} = props;

	let stop=()=>{
		props.setSubmitFinished()
	};

	if(submitFinished){
		setTimeout(stop,3000)
	}

	return (
		<div className={s.settingsFormWrapper}>
			<form  onSubmit={handleSubmit}>
				<div className={props.submitFinished ? s.settingsForm + ' ' + s.active : s.settingsForm}>
					<div className={s.contacts}>
						<span className={s.titleAboutMe}>Contacts</span>
						<Field
							name='contacts.skype'
							type='text'
							component={InputComponent}
							label='skype'
							validate={[]}
						/>
						<Field
							name='contacts.facebook'
							type='text'
							component={InputComponent}
							label='facebook'
							validate={[]}
						/>
						<Field
							name='contacts.instagram'
							type='text'
							component={InputComponent}
							label='instagram'
							validate={[]}
						/>
						<Field
							name='contacts.vk'
							type='text'
							component={InputComponent}
							label='vk'
							validate={[]}
						/>
						<Field
							name='contacts.website'
							type='text'
							component={InputComponent}
							label='My website'
							validate={[]}
						/>
						<Field
							name='contacts.github'
							type='text'
							component={InputComponent}
							label='Git'
							validate={[]}
						/>
					</div>
					<div className={s.description}>
						<span className={s.titleAboutMe}>About me</span>
						<Field
							name='fullName'
							type='text'
							component={InputComponent}
							label='fullName'
							validate={[]}
						/>
						<Field
							name='aboutMe'
							type='text'
							component={InputComponent}
							label='aboutMe'
							validate={[]}
						/>
						<Field
							name='lookingForAJobDescription'
							type='text'
							component={InputComponent}
							label='lookingForAJobDescription'
							validate={[]}
						/>
						<Field
							name='lookingForAJob'
							type='checkbox'
							component={InputComponent}
							label='lookingForAJob'
							validate={[]}
						/>
						<button className={s.sendBtn} type="submit" disabled={pristine || submitting}>To send</button>
						<button className={s.sendBtn} disabled={pristine} onClick={reset}>Clear fields</button>
					</div>

				</div>
				{props.error && <div className={s.settingsErrorForm}><span className={s.errorForm}>{props.error}</span></div>}
				{props.submitFinished && <div className={s.submitFinished}><span className={s.finishedForm}>Данные успешно обновлены</span></div>}
			</form>
		</div>
	)
};

export default reduxForm({form: 'settingsForm'})(SettingsReduxForm)