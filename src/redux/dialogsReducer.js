const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

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
    newMessageText:'tt'
}

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id:5,
                message:state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages,newMessage],
                newMessageText:''
            }
        }
        case UPDATE_MESSAGE_TEXT :{
            return{
                ...state,
                newMessageText:action.newMessage
            }
        }
        default:
            return state;
    }
}


export const addMessageAC = () => {
    return {
        type:ADD_MESSAGE
    }
}

export const updateMessageTextAC = newMessage => {
    return {
        type:UPDATE_MESSAGE_TEXT,
        newMessage
    }
}


export default dialogsReducer;