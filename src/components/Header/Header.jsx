import { NavLink } from "react-router-dom";
import s from "./Header.module.css";


const Header = (props) => {
    return (
        
        <header className={s.header}>
            <img src='https://cryptologos.cc/logos/elrond-egld-egld-logo.png' />
            <div className={s.login}>
                {props.isAuth ? props.login
                : <NavLink to ={'/login'}>
                    Login
                </NavLink> }
            </div>
        </header>
    );
}
export default Header;