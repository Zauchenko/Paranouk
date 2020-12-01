import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return <div className= {s.content}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU'></img>
    <div>
      ava+description
      </div>
    <div >
      My posts
          <div>
        New post
          </div>
      <div className = {s.posts}>
        <div className= {`${s.item} ${s.active}`}>
          Post 1
          </div>
        <div className= {`${s.item} ${s.active}`}>
          Post 2
          </div>
      </div>
    </div>
  </div>

}


export default Profile;