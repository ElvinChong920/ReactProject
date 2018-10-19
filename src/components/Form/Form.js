import React, { Component, Fragment } from 'react';

class Form extends Component {
    state = { value: '' };

    onSubmit = input => {
        const { onAddItem } = this.props;
        onAddItem(input);
        return this.setState({value: ''});
    }

    render () {
        return (
            <Fragment>
                <input onChange={(e)=>this.setState({value: e.target.value})} value={this.state.value}/>
                <button onClick={()=>this.onSubmit(this.state.value)}>Add</button>
            </Fragment>
        );
    }
}

export default Form;
