import React, {useEffect, useState} from 'react';
import s from './Dialogs.module.scss';
import DialogsReduxForm from "./DialogsReduxForm";
import {Posts} from "./Posts";
import {Friends} from "./Friends";

const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));

export const Dialogs = (
	{
		sendNewMessage,
		friends,
		getNewProfile,
		myId,
		myPhoto,
		userProfile,
		getMessages,
		deleteMessage,
		allMessages,
	}) => {

	const [profile, setProfile] = useState(userProfile);
	const [friend, setFriends] = useState(friends);
	const [messages, setMessages] = useState(allMessages);

	const getDialogs = (id) => {
		getNewProfile(id);
		getMessages(id)
	};

	useEffect(() => {
		setProfile(userProfile)
	}, [userProfile]);

	useEffect(() => {
		setMessages(allMessages)
	}, [allMessages]);

	const searchFriend = (name) => {
		if (name.length) {
			setFriends(() => friends.filter(t => t.name.toLowerCase().match(name.toLowerCase())));
		} else {
			setFriends(friends);
		}
	};

	const onSubmit = (values) => {
		values.newTextDialog &&
		sendNewMessage(profile.userId, values.newTextDialog);
		return disableBtnSend(5000).then(() => {
			return true;
		})
	};

	const friendSearch = event => searchFriend(event.target.value);

	return (
		<>
			<input className={s.search}
						 placeholder='Search '
						 type='text'
						 onChange={friendSearch}/>
			<div className={s.friends}>
				<Friends {...{
					friend,
					profile,
					getDialogs
				}}
				/>
			</div>
			<div className={s.dialogsWrapper}>
				<div style={
					{
						color: 'red',
						fontSize: '1.5rem'
					}}>
					Диалоги еще в разработке.
					Пока никто еще кроме <b>' free '</b> не
					пишет...
				</div>
				<div className={s.dialogs}>
					{!messages.length && <div>Полковнику никто не пишет....</div>}
					{
						profile && messages.length &&
						<Posts {...{
							messages,
							profile,
							deleteMessage,
							myId,
							myPhoto
						}}/>
					}
				</div>
				<div className={s.dialogForm}>
					<DialogsReduxForm onSubmit={onSubmit}/>
				</div>
			</div>
		</>
	)
};

