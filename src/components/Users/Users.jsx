import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import user from '../Images/user.jpg';

class Users extends React.Component {

    componentDidMount()  {



        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

            this.props.setUsers(response.data.items);
        });
    }




render() {
    return <div>


        {this.props.users.map(u => <div key={u.id}>

            <div>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : user} className={styles.usersPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}

                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        {/*<div>{u.location.contry}</div>*/}
                        {/*<div>{u.location.city}</div>*/}
                    </div>
                </div>

            </div>


        </div>)}
    </div>
}
}

export default Users;