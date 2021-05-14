import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


class ProfileStatus extends React.Component {



    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState( {
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    // if (!props.profile) {
    //     return <Preloader/>
    // }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div  onClick={this.activateEditMode} className={s.profileStatus}>
                    <span>{this.props.status || 'No Status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
