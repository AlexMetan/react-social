import React from "react";
import { connect } from "react-redux";
import { toggleIsFetchingAC, toggleIsFollowingAC, unFollowTC, getUsersTC, followTC } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component{

    componentDidMount(){
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render(){
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            users = {this.props.users} 
            follow = {this.props.follow}
            unFollow = {this.props.unFollow}
            isFetching = {this.props.isFetching}
            isFollowingProgress = {this.props.isFollowingProgress}
        />
        </>
    }
}
let mapStateToProps = (state) =>{
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.followingInProgress
    }
}
export default compose(
    connect(mapStateToProps, {
        toggleIsFetching: toggleIsFetchingAC,
        toggleFollowingProgress: toggleIsFollowingAC,
        getUsers: getUsersTC,
        follow: followTC,
        unFollow: unFollowTC
    
    }),
    withAuthRedirect
)(UsersContainer)