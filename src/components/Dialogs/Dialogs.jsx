import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to = {'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = () => {
    return (

            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name = 'Dima' id = '1'/>
                    <DialogItem name = 'Andreu' id = '2'/>
                    <DialogItem name = 'Sveta' id = '3'/>
                    <DialogItem name = 'Alena' id = '4'/>
                    <DialogItem name = 'Marina' id = '5'/>

                </div>

            <div className={s.messages}>
                <Message message = 'Hi'/>
                <Message message = 'Yo'/>
                <Message message = 'Where is my money'/>
                <Message message = 'Hate you'/>

            </div>

        </div>

    )
}


export default Dialogs;