// eslint-disable-next-line no-unused-vars
import React from 'react';
import Myposts from "../Myposts";
import {addPost} from "../../../../Redux/profile-reducer";
import {connect} from "react-redux";


let mapStoreToProps = (state) => {
    return {
        postMessageData: state.profilePage.postMessageData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStoreToProps, {addPost})(Myposts);

export default MyPostsContainer;