import React, { PureComponent } from 'react';
import UserTable from './components/UserTable';
import { connect } from 'react-redux';

class User extends PureComponent {
    render () {
        const { users } = this.props;
        return <UserTable data={users} />;
    }
}

const mapStateToProps = state => ({users: state.user.users});

export default connect(mapStateToProps)(User);
