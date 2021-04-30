import loader from '../../Images/1485.gif';
import React from 'react';
import styles from './preloader.module.css';


let Preloader = (props) => {
    return <div>
        <div className={styles.ldsSpinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
}

export default Preloader;
// <img  src={loader}/>