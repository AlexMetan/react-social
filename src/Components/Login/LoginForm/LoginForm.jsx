import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input } from "../../Common/FormControls/FormControls";
import s from "./../../Common/FormControls/FormControls.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit }>
            <div>
                <Field component={Input} placeholder="Login" name="login" validate={[required]} />
            </div>                
            <div>
                <Field component={Input} type="password" placeholder="Password" name="current-password" validate={[required]}/>
            </div>                
            <div>
                <Field component={Input} type="checkbox"  placeholder="Login" name="remember" />Remember me
            </div>   
            {
                props.error && 
            <div>
                <span className={s.formSummaryError}>
                    {props.error}
                </span>
            </div>   
            }        
            <div >
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

export default LoginReduxForm;