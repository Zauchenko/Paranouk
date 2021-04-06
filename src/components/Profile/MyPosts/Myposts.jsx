import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";


const Myposts = () => {
    return (

        <div className={s.posts}>
            My posts
            <div className={s.item}>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
                <div>
                    <Post message = 'Hello, how are you?' likecount = '23'/>
                    <Post message = 'What did you want?' likecount = '10'/>

                </div>


            </div>
        </div>

    )
}


export default Myposts;