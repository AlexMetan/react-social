const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts:[
        {id:1,message:'Hi, how are you?',likesCount:12},
        {id:2,message:'Its my first post',likesCount:14}
    ],
    newPostText: 'Hello'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return{
                ...state,
                posts:[...state.posts,newPost],
                newPostText:''
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostAC = () =>{
    return {
        type:ADD_POST
    }
}

export const updateNewPostTextAC = (newText) => {
    return {
        type:UPDATE_NEW_POST_TEXT,
        newText
    }
}

export default profileReducer;