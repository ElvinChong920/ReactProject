import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ReduxForm extends Component {
    submit = value => (value);

    render () {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit)}>
                <label>Name:</label>
                <Field component='input' name='name' type='text' />
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'userFeedback',
    destroyOnUnmount: false
})(ReduxForm);
