import React, {useState, useEffect} from 'react';
import s from './Profile.module.scss';


const ProfileStatusWithHook = (props) => {

	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	const activateEditMode = () => setEditMode(true);

	const deActivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status)
	};

	const onChangeValue = (e) => {
		setStatus(e.currentTarget.value)
	};

	useEffect(() => {
		setStatus(props.status)
	}, [props.status]);


	return (
		<div>
				<span className={s.titleDesc}>
					Double click to change
				</span>
			{!editMode
				? <div className={s.title}>Status :
					<label className={s.desc}
								 onDoubleClick={activateEditMode}
					>
						"{props.status
						? props.status
						: `Я лентяй и статус не вбил`}"
					</label>
				</div>
				: <div className={s.title}>Status :
					<input className={s.statusInput}
								 onChange={onChangeValue}
								 autoFocus={true}
								 onBlur={deActivateEditMode}
								 value={status}
					/>
				</div>
			}
		</div>
	)

};

export default ProfileStatusWithHook;



