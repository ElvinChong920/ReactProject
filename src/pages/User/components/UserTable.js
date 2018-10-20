import React, { PureComponent, Fragment } from 'react';
import './UserTable.css';

class UserTable extends PureComponent {
    render () {
        const { data } = this.props;
        return (
            <Fragment>
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
                            <tr key={index}>
                                <td>{user.name}</td>
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
