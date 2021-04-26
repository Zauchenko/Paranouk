import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";




const Navbar = (props) => {





    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to ='/profile' activeClassName = {s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to ='/dialogs' activeClassName = {s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to ='/news' activeClassName = {s.activeLink}>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to ='/music' activeClassName = {s.activeLink}>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to ='/settings' activeClassName = {s.activeLink}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.active} ${s.friendsBar}`}>
                <NavLink to ='/friends' activeClassName = {s.activeLink}>Friends </NavLink>
            </div>

    {/*<div className={s.topFriendsCSS}>{props.state.dialogsData[0].name}</div>*/}
    {/*<div className={s.topFriendsCSS}>{props.state.dialogsData[1].name}</div>*/}
    {/*<div className={s.topFriendsCSS}>{props.state.dialogsData[3].name}</div>*/}

        </nav>
    )
}


export default Navbar;