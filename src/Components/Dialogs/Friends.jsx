import React from 'react';
import s from './Dialogs.module.scss';
import ava from "./../../Images/skull.png";
import {Preloader} from "../Others/Preloader/Preloader";


export const Friends = ({
													friend, profile,getDialogs
											}) => {

	return (
		<>
			{friend.length ?
				friend.map(u =>
					<div key={u.id} className={s.friendItem + ' ' + (profile && u.id === profile.userId && s.active)}
							 onClick={() => {
								 getDialogs(u.id)
							 }}
					>
						<img className={s.ava} src={u.photos.large || ava} alt=""/>
						<div className={s.name}>{u.name}</div>
					</div>)
				: <Preloader/>
			}
		</>
	)
};

