import React from 'react';


import Myposts from "../Myposts";
import {actionCreatorAddPost, actionCreatorUpdateNewPostText} from "../../../../Redux/profile-reducer";




const MypostsContainer = (props) => {


let state = props.store.getState();




    let addPost = () => {
        props.store.dispatch(actionCreatorAddPost());
    }

    let onPostChange = (text) => {
        let action = actionCreatorUpdateNewPostText(text);
        props.store.dispatch(action);
    }


    return <Myposts onPostChange={onPostChange} addPost={addPost} newPostText={state.profilePage.newPostText} postMessageData={state.profilePage.postMessageData}/>
}


export default MypostsContainer;