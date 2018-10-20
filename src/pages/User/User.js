import React, { PureComponent, Fragment } from 'react';
import UserTable from './components/UserTable';
import { connect } from 'react-redux';

class User extends PureComponent {
    render () {
        const { users } = this.props;
        return (
            <Fragment>
                <div>Users List:</div>
                <UserTable data={users} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({users: state.user.users});

export default connect(mapStateToProps)(User);
