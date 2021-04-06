import React from 'react';
import s from './Profile.module.css';
import Myposts from "./MyPosts/Myposts";





const Profile = () => {
    return(
        <div className={s.profile}>
            <div>
                <img alt='Main'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEbz9kIk-U4wG9osikggOUK7TKqR8nHn9Yw&usqp=CAU'/>
            </div>

<div>
<Myposts/>
</div>
        </div>
    )
}



export default Profile