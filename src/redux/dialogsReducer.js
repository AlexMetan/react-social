const ADD_MESSAGE = 'ADD_MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id:5,
                message:action.newMessage
            }
            return {
                ...state,
                messages: [...state.messages,newMessage],
            }
        }
        default:
            return state;
    }
}


export const addMessageAC = newMessage => {
    return {
        type:ADD_MESSAGE,
        newMessage
    }
}

export default dialogsReducer;