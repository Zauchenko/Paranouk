import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return(
    <header className={s.header}>
        <img alt={"logo"}
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUChMGlP-keUWH_P8DKHQQ4R1SNOK5CdMULg&usqp=CAU'/>
 </header>
    )
}


export default Header;