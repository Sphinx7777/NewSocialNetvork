import React from 'react';
import s from './Dialogs.module.scss';
import DialogsReduxForm from "./DialogsReduxForm";


export const Dialogs = (props) => {

	let onSubmit = (values) => {
		values.newTextDialog && props.addNewPost(values.newTextDialog);
		const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));
		return disableBtnSend(5000).then(() => {
			return true;
		})
	};


	return (
		<div className={s.dialogsWrapper}>
			<div className={s.users}>
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
				<div className={s.userItem}>
					user
				</div>
			</div>
			<div>

				<div className={s.contentWrapper}>
					<div className={s.userData}>
						user friend Photo and Name and Status and other info
					</div>
					<div className={s.dialogs}>
						dialogs
					</div>
					<DialogsReduxForm onSubmit={onSubmit}/>
				</div>

			</div>

		</div>
	)
};
