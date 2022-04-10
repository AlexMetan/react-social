import React from 'react';
import { getUserProfileTC, getUserStatusTC,  setUserStatusTC } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from '../../Components/withRouter/withRouter';
import { compose } from 'redux';
import { Navigate } from 'react-router-dom';

class ProfileContainer extends React.Component{

    redirect = false;

    componentDidMount(){
        this.redirect = false;
        let userId = this.props.authUserId;
        let match = this.props.match;
        if(match){
            userId = match.params.userId;
        }else if(!userId){
            this.redirect = true;
        }
        if(!this.redirect){
            this.props.setUserProfile(userId);
            this.props.getUserStatus(userId);
        }
    }

    render(){
        
            return(
                (this.redirect) 
                    ? <Navigate to={"/login"}/> 
                    :  <div><Profile {...this.props} /></div>
            )
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth:state.auth.isAuth
})

export default compose (
    connect(mapStateToProps, {setUserProfile: getUserProfileTC, getUserStatus:getUserStatusTC, setUserStatus:setUserStatusTC, updateStatus:setUserStatusTC} ),
    withRouter
)(ProfileContainer);