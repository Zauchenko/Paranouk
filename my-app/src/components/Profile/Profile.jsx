import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import Profileinfo from "./ProfileInfo/Profileinfo";

const Profile = () => {
    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPosts/>
        </div>
    )
}


export default Profile;