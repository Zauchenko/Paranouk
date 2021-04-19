import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import {actionCreatorSendMessage, actionCreatorUpdateNewMessageText} from "../../Redux/State";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id}
                                                                         img={<img src={d.img}/>}/>)

    let messagesElements = props.state.messageData.map((m) => <Message message={m.message}/>)

     let newMessageBody = props.state.newMessageBody;




let addMessage = () => {
      props.dispatch(actionCreatorSendMessage());
}
let updateMessage = (e) => {
    let body = e.target.value;
    props.dispatch(actionCreatorUpdateNewMessageText(body));
}

    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={newMessageBody} onChange={updateMessage} placeholder='Enter your message'/>
            <button onClick={addMessage}>Add message</button>
            </div>


        </div>

    )
}


export default Dialogs;