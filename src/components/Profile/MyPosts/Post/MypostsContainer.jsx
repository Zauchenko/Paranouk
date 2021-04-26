import React from 'react';


import Myposts from "../Myposts";
import {actionCreatorAddPost, actionCreatorUpdateNewPostText} from "../../../../Redux/profile-reducer";
import {connect} from "react-redux";





let mapStoreToProps = (state) =>{
    return {
        postMessageData: state.profilePage.postMessageData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(actionCreatorAddPost());
        },
        onPostChange: (text) => {
           let action = actionCreatorUpdateNewPostText(text);
            dispatch(action);
        }
    }
}



const MypostsContainer = connect(mapStoreToProps, mapDispatchToProps) (Myposts);

export default MypostsContainer;