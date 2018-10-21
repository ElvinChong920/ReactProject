import React , { PureComponent } from 'react';
import './DetailTable.css';

class DetailTable extends PureComponent {
    render () {
        const { data } = this.props;
        return (
            <table className='Detail-table'>
                <thead>
                    <tr>
                        <th className='Header-desc'>Description</th>
                        <th className='Header-value'>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{ data.name }</td>
                    </tr>
                    <tr>
                        <td>Phone No</td>
                        <td>{ data.phone }</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{ data.email }</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>{ data.website }</td>
                    </tr>
                    <tr>
                        <td>Company</td>
                        <td>{ data.company.name }</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{ data.address.city }</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default DetailTable;
