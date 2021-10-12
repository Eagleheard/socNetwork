import s from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialogsItem}>
            <div className={s.dialog}><NavLink to={"/dialog/" + props.id}>{props.name}</NavLink></div>
        </div>
    );
}
export default Dialog;