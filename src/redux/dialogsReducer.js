const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    messages:[
        {id:1,message:'hi'},
        {id:2,message:'how are you?'},
        {id:3,message:'You'},
    ],
    dialogs:[
        {id:1,name:'Alex'},
        {id:2,name:'Wika'},
        {id:3,name:'Katya'},
        {id:4,name:'Karolina'}
    ],
    newMessageText:''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id:5,
                message:state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT :
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}


export const addMessageActionCreator = () => {
    return {
        type:ADD_MESSAGE
    }
}

export const updateMessageTextActionCreator = newMessage => {
    return {
        type:UPDATE_MESSAGE_TEXT,
        newMessage
    }
}


export default dialogsReducer;