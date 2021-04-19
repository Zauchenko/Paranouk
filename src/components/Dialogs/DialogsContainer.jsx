import React from 'react';


import {actionCreatorSendMessage, actionCreatorUpdateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage;







let addMessage = () => {
      props.store.dispatch(actionCreatorSendMessage());
}
let updateMessage = (body) => {
        props.store.dispatch(actionCreatorUpdateNewMessageText(body));
}

    return <Dialogs dialogPage={state} addMesssage={addMessage} updateMessage = {updateMessage}  />


}


export default DialogsContainer;