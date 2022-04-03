import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit }>
            <div>
                <Field component="input" placeholder="Login" name="login" />
            </div>                
            <div>
                <Field component="input" type="password" placeholder="Password" name="password" />
            </div>                
            <div>
                <Field component="input" type="checkbox"  placeholder="Login" name="remember" />Remember me
            </div>                
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

export default LoginReduxForm;