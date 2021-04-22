import React from 'react';
import s from './Profile.module.css';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./MyPosts/Post/MypostsContainer";



const Profile = (props) => {
    return (


            <div>
                <ProfileInfo/>
                <MypostsContainer store={props.store}/>
            </div>

    )
}


export default Profile;