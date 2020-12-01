import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (

    <div className={`${s.item} ${s.active}`}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4uQSf4pHUcTnhnAfADvWGFGq7tXiZw94dw&usqp=CAU' alt='avatar'></img>
          {props.message}
      <div>
        <span>Likes {props.likeCount} </span>
      </div>
    </div>



  )
}


export default Post;