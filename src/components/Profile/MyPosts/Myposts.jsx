import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const Myposts = (props) => {
    let postMessagesElements = props.postMessageData.map((p) => <Post message={p.message} likecount={p.likecount}/>)

    let addPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                <AddPostFormRedux onSubmit={addPost}/>
                <div className={s.postsMessage}>
                    {postMessagesElements}
                </div>
            </div>
        </div>
    )
}


const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostBody'} component={'textarea'} placeholder={'Enter your post text'}/>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddPost'})(AddPostForm)

export default Myposts;