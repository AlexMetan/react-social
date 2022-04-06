import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { logoutTC, setAuthUserDataTC } from '../../redux/authReducer';
import Header from './Header';


class HeaderContainer extends React.Component{

    componentDidMount(){
        this.props.setAuthUserData();
    }

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


export default connect(mapsStateToProps, {setAuthUserData: setAuthUserDataTC, logout:logoutTC})(HeaderContainer);