import React , { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import DetailTable from './components/DetailTable/DetailTable';

class UserDetail extends Component {
    render () {
        const { user } = this.props;
        return (
            <Fragment>
                <h3>User Detail:</h3>
                <DetailTable data={user[0]} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({user: state.user.users});

export default connect(mapStateToProps)(UserDetail);
