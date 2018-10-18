import React, { Component, Fragment } from 'react';

class Form extends Component {
    constructor () {
        super();
        this.state = { value: '' };
    }

    handleSubmit = () => {

    }

    render () {
        return (
            <Fragment>
                <input onChange={(e)=>this.setState({value: e.target.value})} value={this.state.value}/>
                <button onClick={()=>this.handleSubmit()} >Add</button>
            </Fragment>
        );
    }
}

export default Form;
