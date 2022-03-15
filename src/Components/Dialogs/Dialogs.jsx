import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import {addMessageActionCreator, updateMessageTextActionCreator} from './../../redux/dialogsReducer';

const DialogItem = props =>{
    const path = `/dialogs/${props.id}`;
    return(
        <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
            {props.name}
        </NavLink>
        </div>
    )
}

const Message = props => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}



const Dialogs = props => {
    let textArea = React.createRef();
    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let updateMessageText = () => {
        let newMessage = textArea.current.value
        props.dispatch(updateMessageTextActionCreator(newMessage));
    }
    let dialogsElements = props.dialogs
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
   
    let messagesElements = props.messages
        .map((m,id) => <Message message={m.message} key={id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={textArea} value = {props.messageText} onChange = {updateMessageText}/>
                </div>
                <div>
                    <button onClick = { sendMessage }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
