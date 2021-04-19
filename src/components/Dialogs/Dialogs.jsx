import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";



const Dialogs = (props) => {

let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id}
                                                                         img={<img src={d.img}/>}/>)

    let messagesElements = state.messageData.map((m) => <Message message={m.message}/>)

     let newMessageBody = state.newMessageBody;




let addMessage = () => {
      props.addMesssage();
}

let updateMessage = (e) => {
let body = e.target.value;
    props.updateMessage(body);
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