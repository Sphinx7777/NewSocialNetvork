import React, {useEffect, useState} from 'react';
import s from './Dialogs.module.scss';
import DialogsReduxForm from "./DialogsReduxForm";
import {Posts} from "./Posts";
import {Friends} from "./Friends";


export const Dialogs = ({
													sendNewMessage, friends, getNewProfile, myId, myPhoto,
													userProfile, getMessages, deleteMessage,
													allMessages,
												}) => {
	const [profile, setProfile] = useState(userProfile);
	const [friend, setFriends] = useState(friends);
	const [messages, setMessages] = useState(allMessages);

	let getDialogs = (id) => {
		getNewProfile(id);
		getMessages(id)
	};


	useEffect(() => {
		setProfile(userProfile)
	}, [userProfile]);

	useEffect(() => {
		setMessages(allMessages)
	}, [allMessages]);


	let searchFriend = (name) => {
		if (name.length) {
			setFriends(() => friends.filter(t => t.name.toLowerCase().match(name.toLowerCase())));
		} else {
			setFriends(friends);
		}
	};

	let onSubmit = (values) => {
		values.newTextDialog && sendNewMessage(profile.userId, values.newTextDialog);
		const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));
		return disableBtnSend(5000).then(() => {
			return true;
		})
	};

	return (
		<>
			<input className={s.search} placeholder='Search ' type='text' onChange={(event) => {
				searchFriend(event.target.value)
			}}/>
			<div className={s.friends}>

			<Friends {...{friend, profile,getDialogs}} />
			</div>
			<div className={s.dialogsWrapper}>
				<div style={{color: 'red', fontSize: '1.5rem'}}>Диалоги еще в разработке.
					Пока никто еще кроме <b>' free '</b> не
					пишет...
				</div>

				<div className={s.dialogs}>
					{!messages.length && <div>Полковнику никто не пишет....</div>}
					{
						profile && messages.length
						&&
						<Posts {...{messages, profile, deleteMessage, myId, myPhoto}}/>
					}
				</div>
				<div className={s.dialogForm}>
					<DialogsReduxForm onSubmit={onSubmit}/>
				</div>
			</div>
		</>
	)
};

