import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import yesPhoto from '../../Images/Yes.jpg';
import noPhoto from '../../Images/no.png';
import noAvatar from '../../Images/user.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

const onMainPhotoSelected = (e) => {
 if (e.target.files[0]) {
     savePhoto(e.target.files[0]);
 }
}

    return (

        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>

                 <img alt={'large'} src={profile.photos.large || noAvatar }/>
                <div>
                 {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
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

