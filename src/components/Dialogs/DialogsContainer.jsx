import React from 'react';


import {actionCreatorSendMessage, actionCreatorUpdateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";





let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(actionCreatorSendMessage());
        },
        updateMessage: (body) => {
            dispatch(actionCreatorUpdateNewMessageText(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;