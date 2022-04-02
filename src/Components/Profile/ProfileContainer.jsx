import React from 'react';
import { getUserProfileTC } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from '../../Components/withRouter/withRouter';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userId;
        debugger
        if(!userId){
            userId = 22949;
        }
        this.props.setUserProfile(userId);
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
})

export default compose (
    connect(mapStateToProps, {setUserProfile: getUserProfileTC} ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)