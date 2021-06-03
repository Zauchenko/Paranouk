import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    postMessageData: [
        {message: 'Hello, how are you?', likecount: '20', id: '1'},
        {message: 'What did you want?', likecount: '10', id: '2'},
        {message: 'Fuck you', likecount: '2000', id: '3'}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: action.newPostBody,
                likecount: 15,
                id: 5
            };
            return {
                ...state,
                postMessageData: [...state.postMessageData, newPost],
            };
            // noinspection JSCheckFunctionSignatures
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const gettingProfileId = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfileId(userId);
    dispatch(setUserProfile(data));

}
export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));

}
export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}


export default profileReducer;