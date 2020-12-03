import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let postData =
        [
            {id: 1, text: 'Hi', likeCount : 25},
            {id: 2, text: 'It\'s my first post', likeCount : 10},
            {id: 3, text: 'Hahaha', likeCount : 15},
            {id: 4, text: 'Hello', likeCount : 10},
            {id: 5, text: 'Fuck yeah', likeCount : 4},
            {id: 6, text: 'Shit', likeCount : 0}
        ]

    return (
        <div className={s.content}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message={postData[0].text} likeCount={postData[0].likeCount}/>
                    <Post message={postData[1].text} likeCount={postData[1].likeCount}/>
                    <Post message={postData[2].text} likeCount={postData[2].likeCount}/>
                    <Post message={postData[3].text} likeCount={postData[3].likeCount}/>
                    <Post message={postData[4].text} likeCount={postData[4].likeCount}/>
                    <Post message={postData[5].text} likeCount={postData[5].likeCount}/>

                </div>
            </div>
        </div>
    )

}


export default MyPosts;