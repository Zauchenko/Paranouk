import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id}
                                                                         img={<img src={d.img}/>}/>)

    let messagesElements = props.state.messageData.map((m) => <Message message={m.message}/>)




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