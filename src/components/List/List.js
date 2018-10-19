import React, { Component } from 'react';
import './List.css';

class List extends Component {
    render () {
        const { items, onDeleteItem } = this.props;
        return (
            <ol>
                {
                    items.map( (item, index) => (
                        <li key={index} onClick={()=>onDeleteItem(item.id)}>
                            { item.title }
                        </li>
                    ))
                }
            </ol>
        );
    }
}

export default List;
