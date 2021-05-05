import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";



const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    return (

        <div className={s.profileInfo}>
            <div>
                <img alt='Main'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEbz9kIk-U4wG9osikggOUK7TKqR8nHn9Yw&usqp=CAU'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                Ava
            </div>
        </div>

    )
}


export default ProfileInfo;