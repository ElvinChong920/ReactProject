import React, { Component, Fragment } from 'react';
import Link from 'redux-first-router-link';
import { POKEMON } from '../../../../store/Route/routeNames';
import './InputForm.css';

class InputForm extends Component {
    state = {
        name: ''
    };

    render () {
        return (
            <Fragment>
                <input className='Input-field' onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name} />
                <Link className='Search-button' to={{type:POKEMON, payload:{ query:this.state }}}>
                    Search
                </Link>
            </Fragment>
        );
    }
}

export default InputForm;
