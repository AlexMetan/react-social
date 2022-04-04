import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormControls/FormControls';

const maxLength50 = maxLengthCreator(50);

const DialogForm = (props) => {


    return (
        <form onSubmit = { props.handleSubmit }> 
            <div>
                <Field component={Textarea} name="messageBody" validate={[required,maxLength50]}/>
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    );
}
const DialogReduxForm = reduxForm({
    form:'dialogAddMessage'
})(DialogForm);

export default DialogReduxForm;
