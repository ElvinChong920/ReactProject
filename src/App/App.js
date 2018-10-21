import React, { Component } from 'react';
import PageRouter from '../pages/PageRouter/PageRouter';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                </header>
                <div className='App-layout'>
                    <PageRouter />
                </div>
                <div className='App-footer'>react-project</div>
            </div>
        );
    }
}

export default App;
