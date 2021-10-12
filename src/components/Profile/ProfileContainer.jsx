import React from "react";
import Profile from "./Profile";
import s from "./Profile.module.css";
import axios from "axios";
import { setUserProfile } from "../../redux/Profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let UserId = this.props.match.params.UserId;
        if (!UserId) {
            UserId = 19931;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + UserId).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);