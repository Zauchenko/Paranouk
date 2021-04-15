import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {actionCreatorAddPost, actionCreatorUpdateNewPostText} from "../../../Redux/State";




const Myposts = (props) => {

    let postMessagesElements = props.postMessageData.map((p) => <Post message={p.message} likecount={p.likecount}/>)
    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch(actionCreatorAddPost());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(actionCreatorUpdateNewPostText(text));
    }


    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
                <div className={s.postsMessage}>
                    {postMessagesElements}
                </div>
            </div>
        </div>

    )
}


export default Myposts;