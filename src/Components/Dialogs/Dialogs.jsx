import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem';
import Message from './Message';


const Dialogs = props => {
    
    let textArea = React.createRef();
    let sendMessage = () => {
        props.sendMessage();
    }
    let onNewMewssageChange = () => {
        let newMessage = textArea.current.value;
        props.updateNewMessageText(newMessage);
    }
    let dialogsElements = props.dialogsPage.dialogs
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
   
    let messagesElements = props.dialogsPage.messages
        .map((m,id) => <Message message={m.message} key={id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={textArea} value = {props.messageText} onChange = {onNewMewssageChange}/>
                </div>
                <div>
                    <button onClick = { sendMessage }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
