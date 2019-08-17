import React from 'react';
import s from './Profile.module.scss';


class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,

	};
	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	};
	deActivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status)
	};
	onChangeValue = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	};

	componentDidUpdate(prevProps) {

		if (this.props.status !== prevProps.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return (
			<div>
				<span className={s.titleDesc}>Double click to change</span>
				{!this.state.editMode
					? <div className={s.title}>Status :
						<label onDoubleClick={this.activateEditMode}
									 className={s.desc}>"{this.props.status ? this.props.status : `Я лентяй и статус не вбил`}"</label>
					</div>
					: <div className={s.title}>Status :
						<input onChange={this.onChangeValue} autoFocus={true} onBlur={this.deActivateEditMode}
									 className={s.statusInput} value={this.state.status}/>
					</div>}
			</div>
		)
	}
}

export default ProfileStatus;



