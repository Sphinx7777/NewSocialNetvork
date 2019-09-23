import React from 'react';
import s from './Dialogs.module.scss';
import DialogsReduxForm from "./DialogsReduxForm";
import ava from "./../../Images/skull.png";


export const Dialogs = ({addNewPost,users}) => {
	let onSubmit = (values) => {
		values.newTextDialog && addNewPost(values.newTextDialog);
		const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));
		return disableBtnSend(5000).then(() => {
			return true;
		})
	};

	return (
		<>
			<div className={s.users}>
				{users.map(u=>
					<div key={Math.random()} className={s.userItem} onClick={()=>{}}>
						<img className={s.ava} src={u.photos.large || ava} alt=""/>
						<div className={s.name}>{u.name}</div>
				</div>)}
			</div>
			<div className={s.dialogsWrapper}>
				<div className={s.dialogs}>
					<div className={s.dialog}>dialogs</div>
				</div>
				<div className={s.dialogForm}>
					<DialogsReduxForm onSubmit={onSubmit}/>
				</div>

			</div>


		</>
	)
};

