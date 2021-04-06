import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (

        <div className={s.post}>
            <div>
                <img alt='avatar'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuDuBXV7kivIUM0nnd4kEqgGQ8pk0H7NItw&usqp=CAU'/>
                {props.message}
                <div>
                    <span>Like's {props.likecount}</span>
                </div>
            </div>


        </div>

    )
}


export default Post;