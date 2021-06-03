import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <div>
            <div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            </div>

            <div>
                {
                    users.map(u =>
                        <User key={u.id} follow={props.follow}
                              followingInProgress={props.followingInProgress}
                              unfollow={props.unfollow} user={u}/>
                    )}
            </div>
        </div>)
}

export default Users;