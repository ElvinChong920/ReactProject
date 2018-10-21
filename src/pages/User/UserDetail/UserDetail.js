import React , { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import DetailTable from './components/DetailTable/DetailTable';
import './UserDetail.css';

class UserDetail extends Component {
    render () {
        const { user } = this.props;
        return (
            <Fragment>
                <h3>User Detail:</h3>
                {user? <DetailTable data={user} />: <div className='Loading'><ReactLoading type='spin' color='#2f8d88' /></div> }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({user: state.user.userDetail});

export default connect(mapStateToProps)(UserDetail);
