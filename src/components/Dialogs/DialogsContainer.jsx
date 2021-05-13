import React from 'react';
import {
    actionCreatorSendMessage,
    actionCreatorUpdateNewMessageText,
    addMessage,
    updateMessage
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(actionCreatorSendMessage());
//         },
//         updateMessage: (body) => {
//             dispatch(actionCreatorUpdateNewMessageText(body));
//         }
//     }
// }


let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, {addMessage,updateMessage})(AuthRedirectComponent);


export default DialogsContainer;