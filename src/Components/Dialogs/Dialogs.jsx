import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem';
import Message from './Message';
import Dialogform from './DialogForm/DialogForm';


const Dialogs = props => {
    
    let addNewMessage = (formData) => {
        props.sendMessage(formData.messageBody);
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
            <Dialogform onSubmit={addNewMessage}/>
            </div>
            
        </div>
    );
}

export default Dialogs;
