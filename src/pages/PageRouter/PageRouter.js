import React, { Component, Fragment } from 'react';
import Link from 'redux-first-router-link';
import Welcome from '../Welcome/Welcome';
import TodoList from '../TodoList/TodoList';
import NotFound from '../NotFound/NotFound';
import Pokemon from '../Pokemon/Pokemon';
import User from '../User/User';
import UserDetail from '../User/UserDetail/UserDetail';
import { WELCOME, TODOLIST, USER, USERDETAIL, POKEMON } from '../../store/Route/routeNames';
import { connect } from 'react-redux';
import { NOT_FOUND } from 'redux-first-router';
import './PageRouter.css';

class PageRouter extends Component {

    Pages = {
        [WELCOME]: <Welcome />,
        [TODOLIST]: <TodoList />,
        [USER]: <User />,
        [USERDETAIL]: <UserDetail />,
        [NOT_FOUND]: <NotFound />,
        [POKEMON]: <Pokemon />
    };

    render () {
        const { location } = this.props;
        console.log(location);
        return (
            <Fragment>
                <div className='Link-container'>
                    <Link className='Link' to={{type: WELCOME}}>Welcome</Link>
                    <Link className='Link' to={{type: TODOLIST}}>To-do List</Link>
                    <Link className='Link' to={{type: USER}}>User</Link>
                    <Link className='Link' to={{type: POKEMON}}>Pokedex</Link>
                </div>
                {/* {this.Pages[location.type]} */}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { location: state.location };
};

export default connect(mapStateToProps)(PageRouter);
