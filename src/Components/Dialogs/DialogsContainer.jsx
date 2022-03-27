import { connect } from 'react-redux';
import {addMessageAC, updateMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage,
        messageText:state.dialogsPage.newMessageText
    }
}


const DialogsContainer = connect(mapStateToProps,
    {updateNewMessageText:updateMessageTextAC,sendMessage:addMessageAC })(Dialogs)

export default DialogsContainer;
