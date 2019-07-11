import React from 'react';
import s from './Users.module.scss';
import photo from './../../Images/skull2.png';




export const Users = (props) => {
	return (
		<div className={s.users}>
<div className={s.user}>

	<img className={s.photo} src={photo} alt=""/>
	<span className={s.friendStatus}>It's my friend</span>
</div>
			<div className={s.user}>

				<img className={s.photo} src={photo} alt=""/>
				<span className={s.friendStatus}>It's my friend</span>
			</div>
			<div className={s.user}>

				<img className={s.photo} src={photo} alt=""/>
				<span className={s.friendStatus}>It's my friend</span>
			</div>
			<div className={s.user}>

				<img className={s.photo} src={photo} alt=""/>
				<span className={s.friendStatus}>It's my friend</span>
			</div>
			<div className={s.user}>

				<img className={s.photo} src={photo} alt=""/>
				<span className={s.friendStatus}>It's my friend</span>
			</div>
		</div>)


};