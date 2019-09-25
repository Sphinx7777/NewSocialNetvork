import React, {useEffect, useState} from 'react';
import s from './Dialogs.module.scss';
import DialogsReduxForm from "./DialogsReduxForm";
import ava from "./../../Images/skull.png";
import {Preloader} from "../Others/Preloader/Preloader";
import {NavLink} from "react-router-dom";


export const Dialogs = ({
													sendNewMessage, users, getNewProfile, myPhoto,
													userProfile,myMessages,sendMessageStatus,getFriendMessage,
													loadFriendMessages,friendMessages
												}) => {
	const [profile, setProfile] = useState(userProfile);
	const [friend, setUsers] = useState(users);
	const [messages, setMessages] = useState(myMessages);
	const [newFriendMessages, setFriendMessages] = useState(friendMessages);

	let getDialogs = (id)=>{
		getNewProfile(id);
		getFriendMessage(id)
	};

	useEffect(() => {

			setFriendMessages(friendMessages)

	}, [loadFriendMessages,friendMessages]);

	useEffect(() => {

			setProfile(userProfile)

	}, [userProfile,sendMessageStatus]);

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
		values.newTextDialog && sendNewMessage(profile.userId,values.newTextDialog);
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

						<div className={s.userPost}>
							<div className={s.userInfo}>
                <NavLink to={`/profile/${profile.userId}`}>
								<img className={s.postAvatar} src={profile.photos.large || ava} alt=""/>
								</NavLink>
								<b>{profile.fullName}</b>
								<b>09:12:2019</b>
							</div>
							<div className={s.postContent}>
								jhhg juhyguji uhyugygh ygtfygg uhijuy ygtyghh uhhhyftg jhhg juhyguji
								uhyugygh ygtfygg uhijuy ygtyghh uhhhyftg
							</div>
						</div>


						<div className={s.myPost}>
							<div className={s.userInfo}>
								<img className={s.postAvatar} src={myPhoto.large || ava} alt=""/>
								{messages.map(m=>
										<React.Fragment key={m.id}>
									<b>{m.senderName}</b>
									<b>{m.addedAt}</b>
								</React.Fragment>
								)}
							</div>
							{messages.map(m=>
								<div key={m.id+m.recipientId} className={s.postContent}>
									{m.body}
								</div>
							)}
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

