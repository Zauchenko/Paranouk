import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (

        <div className={s.profileInfo}>
            <div>
                <img alt='Main'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEbz9kIk-U4wG9osikggOUK7TKqR8nHn9Yw&usqp=CAU'/>
            </div>
            <div className={s.descriptionBlock}>
                Avata+description
            </div>
        </div>

    )
}


export default ProfileInfo;