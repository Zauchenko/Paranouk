const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postMessageData: [
        {message: 'Hello, how are you?', likecount: '20', id: '1'},
        {message: 'What did you want?', likecount: '10', id: '2'},
        {message: 'Fuck you', likecount: '2000', id: '3'}
    ],
    newPostText:'Write here'


};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                likecount: 15,
                id: 5
            };
            return {
                ...state,
                postMessageData: [...state.postMessageData, newPost],
                newPostText: ''
            };
            // noinspection JSCheckFunctionSignatures


        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };

        }
        default:
            return state;
    }


}

export const actionCreatorAddPost = () => ({type: 'ADD-POST'})
export const actionCreatorUpdateNewPostText = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})


export default profileReducer;