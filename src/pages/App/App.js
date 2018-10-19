import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';
import TodoList from '../TodoList/TodoList';
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
                    <Welcome />
                    <TodoList />
                </div>
            </div>
        );
    }
}

export default App;
