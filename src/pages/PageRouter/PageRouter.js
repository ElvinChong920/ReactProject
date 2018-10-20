import React, { Component, Fragment } from 'react';
import Link from 'redux-first-router-link';
import Welcome from '../Welcome/Welcome';
import TodoList from '../TodoList/TodoList';
import NotFound from '../NotFound/NotFound';
import User from '../User/User';
import { WELCOME, TODOLIST, USER } from '../../store/Route/routeNames';
import { connect } from 'react-redux';
import { NOT_FOUND } from 'redux-first-router';
import './PageRouter.css';

class PageRouter extends Component {

    Pages = {
        [WELCOME]: <Welcome />,
        [TODOLIST]: <TodoList />,
        [USER]: <User />,
        [NOT_FOUND]: <NotFound />
    };

    render () {
        const { location } = this.props;
        return (
            <Fragment>
                <div className='Link-container'>
                    <Link className='Link' to={{type: WELCOME}}>Welcome</Link>
                    <Link className='Link' to={{type: TODOLIST}}>To-do List</Link>
                    <Link className='Link' to={{type: USER}}>User</Link>
                </div>
                {this.Pages[location.type]}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { location: state.location };
};

export default connect(mapStateToProps)(PageRouter);
