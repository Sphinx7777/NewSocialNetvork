import React from 'react';
import s from './Settings.module.scss';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "../Validators/ValidatosComponents";


const SettingsReduxForm = (props) => {

	const {handleSubmit, pristine, reset, submitting, submitFinished} = props;

	let stop=()=>{
		props.setSubmitFinished()
	};

	if(submitFinished){
		setTimeout(stop,5000)
	}




	return (
		<div className={s.settingsFormWrapper}>
			<form  onSubmit={handleSubmit}>
				<div className={props.submitFinished ? s.settingsForm + ' ' + s.active : s.settingsForm}>
					<div className={s.description}>
						<span className={s.titleAboutMe}>About me</span>
						<div className={s.fullName}>
							<Field
								name='fullName'
								type='text'
								component={InputComponent}
								label='fullName'
								validate={[]}
							/>
						</div>
						<div className={s.aboutMe}>
							<Field
								name='aboutMe'
								type='text'
								component={InputComponent}
								label='aboutMe'
								validate={[]}
							/>
						</div>
						<div className={s.lookingForAJobDescription}>
							<Field
								name='lookingForAJobDescription'
								type='text'
								component={InputComponent}
								label='lookingForAJobDescription'
								validate={[]}
							/>
						</div>
						<div className={s.lookingForAJob}>
							<Field
								name='lookingForAJob'
								type='checkbox'
								component={InputComponent}
								label='lookingForAJob'
								validate={[]}
							/>
						</div>
						<button className={s.sendBtn} type="submit" disabled={pristine || submitting}>To send</button>
						<button className={s.sendBtn} disabled={pristine} onClick={reset}>Clear fields</button>
					</div>
					<div className={s.contacts}>
						<span className={s.titleAboutMe}>Contacts</span>
						<Field
							name='skype'
							type='text'
							component={InputComponent}
							label='skype'
							validate={[]}
						/>
						<Field
							name='facebook'
							type='text'
							component={InputComponent}
							label='facebook'
							validate={[]}
						/>
						<Field
							name='instagram'
							type='text'
							component={InputComponent}
							label='instagram'
							validate={[]}
						/>
						<Field
							name='vk'
							type='text'
							component={InputComponent}
							label='vk'
							validate={[]}
						/>
						<Field
							name='email'
							type='email'
							component={InputComponent}
							label='email'
							validate={[]}
						/>

					</div>
				</div>
				{props.error && <div className={s.settingsErrorForm}><span className={s.errorForm}>{props.error}</span></div>}
				{props.submitFinished && <div className={s.submitFinished}><span className={s.finishedForm}>Данные успешно обновлены</span></div>}
			</form>
		</div>
	)
};

export default reduxForm({form: 'settingsForm'})(SettingsReduxForm)