import React from 'react';
import s from './Profile.module.scss';
import photo from './../../Images/skull2.png';


export const Profile = (props) => {debugger;


	return (
		<div className={s.profileWrapper}>
			<div className={s.profile} >
						<div className={s.avaAndBtn}>
							<img className={s.photo} src={photo} alt=""/>
							<div className={s.btnAdd}>Add as friend</div>
							{/*<div className={s.btnDell}>Dell from friends</div>*/}
						</div>
						<div className={s.description}>
							<div className={s.title}>Name : <label className={s.desc}> dddsdsdfddsf</label></div>
							<div className={s.title}>About my : <label className={s.desc}> dddsdsdfddsf</label></div>
							<div className={s.title}>LookingForAJob : <label className={s.desc}> dddsdsdfddsf</label></div>
							<div className={s.title}>Contacts :
								<div className={s.contacts}>
									<label className={s.title}>Facebook : <span className={s.desc}>fbfbfbfbfb</span>  </label>
									<label className={s.title}> VK : <span className={s.desc}>vkvkvkvkvk</span></label>
									<label className={s.title}>My website : <span className={s.desc}>wswswswswswsw</span></label></div>
							</div>
							<div className={s.title}>Status : <label className={s.desc}>"status kjjhjh"</label></div>
						</div>
					</div>
		</div>
	)


};