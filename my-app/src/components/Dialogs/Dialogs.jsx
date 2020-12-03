import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {


    let dialogsData =
        [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Papa'},
            {id: 5, name: 'Dimka'},
            {id: 6, name: 'Marina'}
        ]

    let messagesData =
        [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'How is your IT-kamasutra'},
            {id: 3, text: 'Sasha'},
            {id: 4, text: 'Hello'},
            {id: 5, text: 'Fuck yeah'},
            {id: 6, text: 'No'}
        ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>


            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].text}/>
                <Message message={messagesData[1].text}/>
                <Message message={messagesData[2].text}/>
                <Message message={messagesData[3].text}/>
                <Message message={messagesData[4].text}/>
                <Message message={messagesData[5].text}/>

            </div>
        </div>
    )
}


export default Dialogs;