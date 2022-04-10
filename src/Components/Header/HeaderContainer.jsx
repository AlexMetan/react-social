import React from 'react';
import { connect } from 'react-redux';
import { logoutTC } from '../../redux/authReducer';
import Header from './Header';


class HeaderContainer extends React.Component{
    render(){
        return <Header {...this.props} />
    }
}

const mapsStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
}


export default connect(mapsStateToProps, { logout:logoutTC})(HeaderContainer);