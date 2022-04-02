import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {addMessageAC, updateMessageTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        messageText: state.dialogsPage.newMessageText,
    }
}

export default compose(
    connect(mapStateToProps,{updateNewMessageText:updateMessageTextAC,sendMessage:addMessageAC }),
    withAuthRedirect
)(Dialogs);
