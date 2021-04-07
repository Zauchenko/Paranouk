import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";


const Myposts = () => {

    let postMessageData = [
        {message: 'Hello, how are you?', likecount: '20', id: '1'},
        {message: 'What did you want?', likecount: '10', id: '2'},
        {message: 'Fuck you', likecount: '2000', id: '3'}
    ]

    let postMessagesElements = postMessageData.map((p) => <Post message={p.message} likecount={p.likecount}/>)

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