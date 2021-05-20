import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import yesPhoto from '../../Images/Yes.jpg';
import noPhoto from '../../Images/no.png';
import noAvatar from '../../Images/user.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }


    return (

        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>

                {profile.photos.large ? <img alt={'large'} src={profile.photos.large}/> :
                    <img alt={'if no avatar'} src={noAvatar}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                <div className={s.jobPhoto}>
                    Looking for a JOB: {profile.lookingForAJob ? <img alt={"if yes "} src={yesPhoto}/> :
                    <img alt={'no'} src={noPhoto}/>}
                </div>


            </div>
        </div>

    )
}


export default ProfileInfo;
