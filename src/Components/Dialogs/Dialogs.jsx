import React from 'react';
import s from './Dialogs.module.scss';
import DialogsReduxForm from "./DialogsReduxForm";


export const Dialogs = (props) => {

let	onSubmit = (formData)=> {

};

	return (
		<div className={s.dialogsWrapper}>
			<div className={s.dialogs}>
			<div className={s.user}>
				<div className={s.userItem}>
				user
			</div>
				<div className={s.userItem}>
					user
				</div>
				<div className={s.userItem}>
					user
				</div>
				<div className={s.userItem}>
					user
				</div>
			</div>
			<div className={s.messages}>
				<DialogsReduxForm onSubmit={onSubmit} />
				<div>
					messages
				</div>
				<div>
					messages
				</div>
				<div>
					messages
				</div>

			</div>
			<div className={s.answers}>
				answers
			</div>
			</div>
		</div>
	)
};
