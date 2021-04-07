import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";


const Dialogs = () => {

    let dialogsData = [
        {name: 'Dima', id: '1'},
        {name: 'Andreu', id: '2'},
        {name: 'Sveta', id: '3'},
        {name: 'Alena', id: '4'},
        {name: 'Marina', id: '5'}
    ]

    let messageData = [
        {message: 'Hi', id: '1'},
        {message: 'Yo', id: '2'},
        {message: 'Where is my money', id: '3'},
        {message: 'Hate you', id: '4'},
        {message: 'Hate you', id: '5'}
    ]

    let dialogsElements = dialogsData.map((d) => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messageData.map((m) => <Message message={m.message}/>)

    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>

    )
}


export default Dialogs;