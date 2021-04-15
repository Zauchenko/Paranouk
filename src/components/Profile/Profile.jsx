import React from 'react';
import s from './Profile.module.css';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (


            <div>
                <ProfileInfo/>
                <Myposts postMessageData = {props.state.postMessageData}
                            newPostText = {props.state.newPostText}
                         dispatch={props.dispatch}
                         />
            </div>

    )
}


export default Profile;