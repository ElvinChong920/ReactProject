import React, { PureComponent } from 'react';
import UserTable from './components/UserTable';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import './User.css';

class User extends PureComponent {
    render () {
        const { users } = this.props;
        return users? <UserTable data={users} /> : <div className='Loading'><ReactLoading type='spin' color='#2f8d88' /></div>;
    }
}

const mapStateToProps = state => ({users: state.user.users});

export default connect(mapStateToProps)(User);
