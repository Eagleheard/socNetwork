
import { connect } from "react-redux";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/Message-reducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
    return {
        messages: state.MessagePage.messages,
        dialogs: state.MessagePage.dialogs,
        NewMessage: state.MessagePage.NewMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        newMessageChange: (text) => {
            let action = updateMessageActionCreator(text);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;