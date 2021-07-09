import React from 'react';
// import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Header = (props) => {
    return (
        <header >
            <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUChMGlP-keUWH_P8DKHQQ4R1SNOK5CdMULg&usqp=CAU'}
                    size={64} style={{float:"left"}} shape="square" icon={<UserOutlined />} />
            {/*<img alt={"logo"}*/}
            {/*     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUChMGlP-keUWH_P8DKHQQ4R1SNOK5CdMULg&usqp=CAU'/>*/}
            <div >

                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    )
}

export default Header;

