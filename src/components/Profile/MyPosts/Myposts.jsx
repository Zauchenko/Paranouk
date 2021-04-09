import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";


const Myposts = (props) => {



    let postMessagesElements = props.postMessageData.map((p) => <Post message={p.message} likecount={p.likecount}/>)

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                <textarea>White here what you want</textarea>
                <div>
                    <button>Add post</button>
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