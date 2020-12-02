import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className= {`${s.dialog} ${s.active}`}>
                    <NavLink to = '/dialogs/1'>Dima</NavLink>
                </div>
                <div className= {s.dialog}>
                    <NavLink to = '/dialogs/2'>Andrey</NavLink>
                </div>
                <div className= {s.dialog}>
                    <NavLink to = '/dialogs/3'>Sasha</NavLink>
                </div>
                <div className= {s.dialog}>
                    <NavLink to = '/dialogs/4'>Papa</NavLink>
                </div>
                <div className= {s.dialog}>
                    <NavLink to = '/dialogs/5'>Dimka</NavLink>
                </div>
                <div className= {s.dialog}>
                    <NavLink to = '/dialogs/6'>Marina</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your IT-kamasutra</div>
                <div className={s.message}>Hello</div>
            </div>
        </div>
    )
}


export default Dialogs;