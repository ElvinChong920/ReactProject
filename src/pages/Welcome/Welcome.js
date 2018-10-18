import React, { Component, Fragment } from 'react';

export default class Welcome extends Component {
    render () {
        return (
            <Fragment>
                <div>
                    Edit <code>src/App.js</code> and save to reload.
                </div>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </Fragment>
        );
    }
}
