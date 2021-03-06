import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email} = response.data.data;
                this.props.setAuthUserData(id, login, email);
            }
        })
        }
        
    render() {
        return <Header {...this.props} />
    

    }
}
let mapStateToProps = (state) => {
    return {
        id: state.Auth.id,
        login: state.Auth.login,
        isAuth: state.Auth.isAuth
    }
}
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);