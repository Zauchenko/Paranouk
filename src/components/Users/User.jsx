import React from "react";
import styles from "./users.module.css";
import userNoAvatar from '../Images/user.jpg';
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div key={user.id}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt={"avatar"} src={user.photos.small != null ? user.photos.small : userNoAvatar}
                             className={styles.usersPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);


                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id);

                        }}>Follow</button>}
                </div>
                <div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        {/*<div>{user.location.country}</div>*/}
                        {/*<div>{user.location.city}</div>*/}
                    </div>
                </div>
            </div>
        </div>)
}

export default User;