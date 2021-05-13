import React from 'react';
import {
    addMessage,
    updateMessage
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, updateMessage}),
    withAuthRedirect
)(Dialogs);