import React from 'react';
import s from './Profile.module.scss';
import photo from './../../Images/skull2.png';


export const Profile = (props) => {


	return (
		<div className={s.profileWrapper}>
			<div className={s.profile}>
			<div className={s.avaAndBtn}>
				<img className={s.photo} src={photo} alt=""/>
				<div className={s.btnAdd}>Add as friend</div>
				{/*<div className={s.btnDell}>Dell from friends</div>*/}
			</div>
				<div className={s.description}>
					<div className={s.title}>Name : <label> dddsdsdfddsf</label></div>
					<div className={s.title}>About my : <label> dddsdsdfddsf</label></div>
					<div className={s.title}>LookingForAJob : <label> dddsdsdfddsf</label></div>
					<div className={s.title}>Contacts :
						<div className={s.contacts}>
						<label>Facebook : <a href="#">fbfbfbfbfb</a> </label>
						              <label> VK : <a href="#">vkvkvkvkvk</a> </label>
						              <label>My website : <a href="#">wswswswswswswswsw</a></label></div>
					</div>
					<div className={s.title}>status : <label> status kjjhjh</label></div>
				</div>
			</div>
		</div>
	)


};