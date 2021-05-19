import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import yesPhoto from '../../Images/Yes.jpg';
import noPhoto from '../../Images/no.png';
import noAvatar from '../../Images/user.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


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

                {props.profile.photos.large ? <img alt={'large'} src={props.profile.photos.large}/> : <img alt={'if no avatar'} src={noAvatar}/>}
                <ProfileStatusWithHooks status ={props.status} updateStatus={props.updateStatus}/>

                <div className={s.jobPhoto}>
                   Looking for a JOB: {props.profile.lookingForAJob ? <img alt={"if yes "} src={yesPhoto}/> : <img alt={'no'} src={noPhoto}/>}
                </div>


            </div>
        </div>

    )
}


export default ProfileInfo;
