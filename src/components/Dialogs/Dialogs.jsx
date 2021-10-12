import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Messages from './Messages/Messages';
import React from "react";



const Dialogs = (props) => {
    debugger;
    let newMessageElement = React.createRef();
    
    let addMessage = () => {
        props.addMessage();
    }
    let newMessageChange = () => {
        let text = newMessageElement.current.value;
        props.newMessageChange(text);
    }

    let MessagesElements = props.messages.map((message) => <Messages message={message.message} />);
    let DialogsElements = props.dialogs.map((dialog) => <Dialog id={dialog.id} name={dialog.name} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
               {DialogsElements}
            </div>
            <div className={s.messages}>
            {MessagesElements}
            <div>
                <textarea ref={newMessageElement} onChange={newMessageChange} value={props.NewMessage}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add</button>
            </div>
            </div>
           
        </div>
    );
}

export default Dialogs;