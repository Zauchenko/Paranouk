import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className= {`${s.dialog} ${s.active}`}>
        <NavLink to = {'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
         <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name = 'Dima' id = '1' />
                <DialogItem name = 'Andrey' id = '2' />
                <DialogItem name = 'Sasha' id = '3' />
                <DialogItem name = 'Papa' id = '4' />
                <DialogItem name = 'Dimka' id = '5' />
                <DialogItem name = 'Marina' id = '6' />


            </div>
            <div className={s.messages}>
                <Message message = 'Hi' />
                <Message message = 'How is your IT-kamasutra' />
                <Message message = 'Hello' />
                <Message message = 'Fuck yeah' />
                <Message message = 'No' />


            </div>
        </div>
    )
}


export default Dialogs;