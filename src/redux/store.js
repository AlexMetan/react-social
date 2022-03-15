import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        profilePage:{
            posts:[
                {id:1,message:'Hi, how are you?',likesCount:12},
                {id:2,message:'Its my first post',likesCount:14}
            ],
            newPostText: 'Hello'
        },
        dialogsPage:{
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
    },
    _callSubscriber(){

    },
    getState(){
        return this._state;
    },
    subscribe(obeserver){
        this._callSubscriber = obeserver
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}
 

export default store;