import React, {useState} from 'react';
import s from './Settings.module.scss';



const UploadPhoto = (props) => {

	let [photo, setPhoto] = useState(null);

	let setNewPhoto = (e) => {
		let formData = new FormData();
		formData.append('image', e.currentTarget.files[0]);
		setPhoto(formData);
	};

	let sentPhoto = () => {
		props.onSubmit(photo);
		setPhoto(null);
	};
	if(props.uploadPhotos) {
		setTimeout(()=>props.setUploadPhoto(null),5000)
		}

	return (
		<div className={s.uploadPhotoWrapper}>
			<span>Upload user photo</span>
			<div  className={s.uploadPhoto}>
				<input
					name='image'
					type='file'
					onChange={setNewPhoto}
				/>
				<div className={s.sendPhotoBtn}>
					<button  onClick={sentPhoto} disabled={!photo }>Upload photo</button>
				</div>
				{props.uploadPhotos ? <div className={s.uploadPhotoFinished}>Фото успешно загружено</div>
					:''}
			</div>
		</div>
	)
};

export default UploadPhoto;