import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts:[
        {id:1,message:'Hi, how are you?',likesCount:12},
        {id:2,message:'Its my first post',likesCount:14}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: action.postBody,
                likesCount: 0
            };
            return{
                ...state,
                posts:[...state.posts,newPost],
                newPostText:''
            }
        }
        case SET_USER_PROFILE:{
            return{
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS:{
            return{
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}
export const addPostAC = postBody =>{
    return {
        type:ADD_POST,
        postBody
    }
}


export const setUserProfileAC = (profile) => {
    return {
        type:SET_USER_PROFILE,
        profile
    }
}
export const setStatusAC = (status) => {
    return {
        type:SET_STATUS,
        status
    }
}

export const getUserStatusTC = userId => {
    return dispatch => {
        profileAPI.getStatus(userId).then(response=>{
            dispatch(setStatusAC(response.data));
        })
    }
}

export const setUserStatusTC = status => {
    return dispatch => {
        profileAPI.setStatus(status).then(data=>{
            if(data.resultCode === 0){
                dispatch(setStatusAC(status));
            }
        })
    }
}

export const getUserProfileTC = (userId) =>{
    return dispatch => {
        profileAPI.getUserProfile(userId).then((data)=>{
            dispatch(setUserProfileAC(data));
        })
    }
}

export default profileReducer;