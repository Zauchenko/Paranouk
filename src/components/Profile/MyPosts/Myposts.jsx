import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";


const Myposts = () => {
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
                    <Post message='Hello, how are you?' likecount='23'/>
                    <Post message='What did you want?' likecount='10'/>

                </div>


            </div>
        </div>

    )
}


export default Myposts;