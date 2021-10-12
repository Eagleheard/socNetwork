import { connect } from "react-redux";
import { follow, setCurrentPage, totalCount, setUsers, showMore, toggleIsFetching, unfollow } from "../../redux/Users-reducer";
import Users from './Users.jsx'
import React from "react";
import Preloader from "../../common/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.totalCount(data.totalCount);
        })
    }
    onPageChanged = (PageNumber) => {
        this.props.setCurrentPage(PageNumber);
        this.props.toggleIsFetching(true);
       usersAPI.getUsers(PageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
    }
}
/*let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(FollowAC(userId));
        },
        unfollow: (userId) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(Set_userAC(users))
        },
        showMore: () => {
            dispatch(Show_moreAC);
        },
        setCurrentPage: (PageNumber) => {
            dispatch(Set_current_pageAC(PageNumber));
        },
        totalCount: (totalUsersCount) => {
            dispatch(Set_total_countAC(totalUsersCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(Toggle_is_Fetching(isFetching))
        }
    }
}
*/
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    showMore,
    setCurrentPage,
    totalCount,
    toggleIsFetching
}
)(UsersContainer);
