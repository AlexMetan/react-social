import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginTC } from "../../redux/authReducer";
import LoginForm from "./LoginForm/LoginForm";


const Login = props =>{
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.remember);
    }
    if(props.isAuth){
        return <Navigate to="/profile"/>
    }
    return (
        <div>
           <h1>Login</h1>
           <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isAuth : state.auth.isAuth
    }
}
export default connect(mapStateToProps,{login:loginTC})(Login);