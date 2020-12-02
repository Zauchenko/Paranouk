import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {
    return (
        <div className={s.content}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU'></img>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
}


export default Profileinfo;