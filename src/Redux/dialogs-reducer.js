const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({message: body, id: '6'});
            return state;
        default:
            return state;
    }


}


export const actionCreatorSendMessage = () => ({type: 'SEND-MESSAGE'})
export const actionCreatorUpdateNewMessageText = (body) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})

export default dialogsReducer;