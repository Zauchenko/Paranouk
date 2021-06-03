import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../Common/Form/FormsControl";

const Myposts = React.memo(props => {



    let postMessagesElements = props.postMessageData.map((p) => <Post message={p.message} key={p.id} likecount={p.likecount}/>)

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
})

const maxLength15 = maxLengthCreator(15)



const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostBody'} component={Textarea} placeholder={'Enter your post text'}
            validate={[required, maxLength15]}/>
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