import React, {useEffect, useState} from 'react';
import s from './Dialogs.module.scss';
import DialogsReduxForm from "./DialogsReduxForm";
import ava from "./../../Images/skull.png";
import {Preloader} from "../Others/Preloader/Preloader";
import {NavLink} from "react-router-dom";


export const Dialogs = ({
													sendNewMessage, users, getNewProfile, myPhoto,loadProfile,
													userProfile, myMessages, sendMessageStatus, getFriendMessage,
													loadFriendMessages, friendMessages,
												}) => {
	const [profile, setProfile] = useState(userProfile);
	const [friend, setUsers] = useState(users);
	const [messages, setMessages] = useState(myMessages);
	const [newFriendMessages, setFriendMessages] = useState(friendMessages);

	let getDialogs = (id) => {
		getNewProfile(id);
		getFriendMessage(id)
	};

	useEffect(() => {
		setFriendMessages(friendMessages)
	}, [profile, friendMessages]);

	useEffect(() => {
		setProfile(userProfile)
	}, [userProfile]);

	useEffect(() => {
		setMessages(myMessages)
	}, [myMessages]);


	let searchFriend = (name) => {
		if (name.length) {
			setUsers(() => users.filter(t => t.name.toLowerCase().match(name.toLowerCase())));
		} else {
			setUsers(users);
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
			<div className={s.users}>
				<input className={s.search} placeholder='Search ' type='text' onChange={(event) => {
					searchFriend(event.target.value)
				}}/>
				{friend.length ?
					friend.map(u =>
						<div key={u.id} className={s.userItem + ' ' + (profile && u.id === profile.userId && s.active)}
								 onClick={() => {
									 getDialogs(u.id)
								 }}
						>
							<img className={s.ava} src={u.photos.large || ava} alt=""/>
							<div className={s.name}>{u.name}</div>
						</div>)
					: <Preloader/>
				}
			</div>
			<div className={s.dialogsWrapper}>
				<div className={s.dialogs}>
					{profile && <div className={s.posts}>
						<div className={s.userPostWrapper}>
							{newFriendMessages.map(m =>
								<div key={m.id+Math.random()} className={s.userPost}>
									<div className={s.userInfo}>
										<NavLink to={`/profile/${profile.userId}`}>
											<img className={s.postAvatar} src={profile.photos.large || ava} alt=""/>
										</NavLink>
										<b>{m.senderName}</b>
									</div>
									<div className={s.postContent}>
										<div>{m.body}</div>
										<div>
											<div
												className={s.date}>{m.addedAt.slice(8, 10)}.{m.addedAt.slice(5, 7)}.{m.addedAt.slice(0, 4)}</div>
											<div className={s.date}>{m.addedAt.slice(11, 13)}.{m.addedAt.slice(14, 16)}</div>
										</div>
									</div>
								</div>)}
						</div>
						<div className={s.myPostWrapper}>
							{messages.map(m =>
								<div key={m.id} className={s.myPost}>
									<div  className={s.myPostContent}>
										<div>{m.body}</div>
										<div>
											<div className={s.date}>
												{m.addedAt.slice(8, 10)}.{m.addedAt.slice(5, 7)}.{m.addedAt.slice(0, 4)}
											</div>
											<div className={s.date}>
												{m.addedAt.slice(11, 13)}.{m.addedAt.slice(14, 16)}
											</div>
										</div>
									</div>
									<div className={s.userInfo}>
										<img className={s.postAvatar} src={myPhoto.large || ava} alt=""/>
										<b>{m.senderName}</b>
									</div>
								</div>)}
						</div>
					</div>}
				</div>
				<div className={s.dialogForm}>
					<DialogsReduxForm onSubmit={onSubmit}/>
				</div>
			</div>
		</>
	)
};

