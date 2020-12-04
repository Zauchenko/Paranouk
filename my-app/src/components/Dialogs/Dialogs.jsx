import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {


    let dialogsData =
        [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Papa'},
            {id: 5, name: 'Dimka'},
            {id: 6, name: 'Marina'}

        ];

    let messagesData =
        [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'How is your IT-kamasutra'},
            {id: 3, text: 'Sasha'},
            {id: 4, text: 'Hello'},
            {id: 5, text: 'Fuck yeah'},
            {id: 6, text: 'No'}
        ];


    let dialogsElements = dialogsData.map(dialog => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    });


    let messagesElements = messagesData.map(message => {
        return (
            <Message message={message.text}/>

        )
    });


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