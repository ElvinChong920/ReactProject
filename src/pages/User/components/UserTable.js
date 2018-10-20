import React, { PureComponent, Fragment } from 'react';
import Link from 'redux-first-router-link';
import { USERDETAIL } from '../../../store/Route/routeNames';
import './UserTable.css';

class UserTable extends PureComponent {
    render () {
        const { data } = this.props;
        return (
            <Fragment>
                <h3>User Table:</h3>
                <table className='User-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((user,index)=>(
                            <tr key={index} >
                                <td><Link className='link' to={{ type: USERDETAIL, payload:  { query: { name: user.name } } }}>{user.name}</Link></td>
                                <td>{user.email}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default UserTable;
