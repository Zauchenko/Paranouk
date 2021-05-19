import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/Form/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";


const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}
                                                                   img={<img alt={'avatar'} src={d.img}/>}/>)

    let messagesElements = state.messageData.map((m) => <Message key={m.id} message={m.message}/>)


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}


const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.messages}>
                <Field component={Textarea} name="newMessageBody" placeholder='Enter your message'
                       validate={[required, maxLength50]}/>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)


export default Dialogs;