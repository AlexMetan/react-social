import React from "react";
import { connect } from "react-redux";
import { toggleIsFetchingAC, toggleIsFollowingAC, unFollowTC, getUsersTC, followTC } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, getIsFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/selectors/usersSelectors";

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
        users:getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingInProgress(state)
    }
}
export default compose(
    connect(mapStateToProps, {
        toggleIsFetching: toggleIsFetchingAC,
        toggleFollowingProgress: toggleIsFollowingAC,
        getUsers: getUsersTC,
        follow: followTC,
        unFollow: unFollowTC
    
    })
)(UsersContainer)