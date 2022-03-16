import React from 'react';
import {addMessageActionCreator, updateMessageTextActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = props => {
    
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onNewMewssageChange = (newMessage) => {
        props.store.dispatch(updateMessageTextActionCreator(newMessage));
    }
    return (
        <Dialogs 
            updateNewMessageText={onNewMewssageChange} 
            sendMessage ={onSendMessageClick}
            dialogs = {state.dialogsPage.dialogs} 
            messages = {state.dialogsPage.messages}
            messageText = {state.dialogsPage.newMessageText}
        />
    );
}

export default DialogsContainer;
