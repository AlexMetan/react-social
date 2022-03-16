import s from './Dialogs.module.css'

const Message = props => {
    return(
        <div className={s.messageBox}>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message;