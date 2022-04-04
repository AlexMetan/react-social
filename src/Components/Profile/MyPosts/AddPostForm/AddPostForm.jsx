import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../Common/FormControls/FormControls';

const maxLength10 = maxLengthCreator(10);

const AddPostForm = props => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component={Textarea} name = "postBody" validate={[required, maxLength10]} placeholder="Post Message"/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    );
}

const AddPostReduxForm = reduxForm({form:'addPost'})(AddPostForm);

export default AddPostReduxForm;

