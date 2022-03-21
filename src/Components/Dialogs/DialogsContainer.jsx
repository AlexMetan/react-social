import { connect } from 'react-redux';
import {addMessageActionCreator, updateMessageTextActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage,
        messageText:state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageText : (newMessage)=>{ dispatch(updateMessageTextActionCreator(newMessage))},
        sendMessage: () =>{ dispatch((addMessageActionCreator()));
        }    
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
