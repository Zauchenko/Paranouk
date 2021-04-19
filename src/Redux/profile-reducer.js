const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postMessageData: [
        {message: 'Hello, how are you?', likecount: '20', id: '1'},
        {message: 'What did you want?', likecount: '10', id: '2'},
        {message: 'Fuck you', likecount: '2000', id: '3'}
    ],


};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likecount: 15
            };

            state.postMessageData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }


}

export const actionCreatorAddPost = () => ({type: 'ADD-POST'})
export const actionCreatorUpdateNewPostText = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})


export default profileReducer;