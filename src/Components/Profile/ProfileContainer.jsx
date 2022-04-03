import React from 'react';
import { getUserProfileTC, getUserStatusTC,  setUserStatusTC } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from '../../Components/withRouter/withRouter';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = 22949;
        let match = this.props.match;
        if(match){
            userId = match.params.userId;
        }
        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render(){
        return(
            <div>
                <Profile {...this.props} />
            </div>
        )
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status
})

export default compose (
    connect(mapStateToProps, {setUserProfile: getUserProfileTC, getUserStatus:getUserStatusTC, setUserStatus:setUserStatusTC, updateStatus:setUserStatusTC} ),
    withRouter
    // withAuthRedirect
)(ProfileContainer);