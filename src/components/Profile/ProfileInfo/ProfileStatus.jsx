import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () =>{
        this.setState(
            {
                editMode: true
            });
    }
    deActivateEditMode = () =>{
        this.setState(
            {
                editMode: false
            });
    }

    // if (!props.profile) {
    //     return <Preloader/>
    // }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div  onClick={this.activateEditMode} className={s.profileStatus}>
                    <span>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
