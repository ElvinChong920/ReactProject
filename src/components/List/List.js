import React, { Component } from 'react';
import './List.css';

class List extends Component {
    render () {
        const { items } = this.props;
        return (
            <ol>
                {
                    items.map( (item, index) => (
                        <li key={index}>
                            { item.title }
                        </li>
                    ))
                }
            </ol>
        );
    }
}

export default List;
