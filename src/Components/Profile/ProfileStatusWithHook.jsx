import React, {useState,useEffect} from 'react';
import s from './Profile.module.scss';


const ProfileStatusWithHook =(props)=> {

	let [editMode,setEditMode] = useState(false);
	let [status,setStatus] = useState(props.status);

	let activateEditMode = () => {
		setEditMode(true)
	};
	let deActivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status)
	};


	let onChangeValue = (e) => {
		setStatus(e.currentTarget.value)
	};

	useEffect(()=>{
		setStatus(props.status)
	},[props.status]);


		return (
			<div>
				<span className={s.titleDesc}>Double click to change</span>
				{!editMode
					? <div className={s.title}>Status :
						<label onDoubleClick={activateEditMode}
									 className={s.desc}>"{props.status ? props.status : `Я лентяй и статус не вбил`}"</label>
					</div>
					: <div className={s.title}>Status :
						<input onChange={onChangeValue} autoFocus={true} onBlur={deActivateEditMode}
									 className={s.statusInput} value={status}/>
					</div>}
			</div>
		)

};

export default ProfileStatusWithHook;



