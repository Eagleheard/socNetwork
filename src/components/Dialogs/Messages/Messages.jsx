import s from "./Messages.module.css";

const Messages = (props) => {
    
    return (
        <div className={s.message}>
            <div className={s.item}>{props.message}</div>
        </div>
    );
}

export default Messages;