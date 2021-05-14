import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import yesPhoto from '../../Images/Yes.jpg';
import noPhoto from '../../Images/no.png';
import noAvatar from '../../Images/user.jpg';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    return (

        <div className={s.profileInfo}>
            {/*<div>*/}
            {/*    <img alt='Main'*/}
            {/*         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEbz9kIk-U4wG9osikggOUK7TKqR8nHn9Yw&usqp=CAU'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>

                {props.profile.photos.large ? <img src={props.profile.photos.large}/> : <img src={noAvatar}/>}
                <ProfileStatus status ={props.status} updateStatus={props.updateStatus}/>

                <div className={s.jobPhoto}>
                   Looking for a JOB: {props.profile.lookingForAJob ? <img src={yesPhoto}/> : <img src={noPhoto}/>}
                </div>


            </div>
        </div>

    )
}


export default ProfileInfo;
