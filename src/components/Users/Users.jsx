import React from "react";
import styles from "./users.module.css";
import user from '../Images/user.jpg';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.pages}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : user}
                                     className={styles.usersPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    usersAPI.unfollowUsers(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });


                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    usersAPI.followUsers(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        });

                                }}>Follow</button>}
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                {/*<div>{u.location.country}</div>*/}
                                {/*<div>{u.location.city}</div>*/}
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>)
}

export default Users;