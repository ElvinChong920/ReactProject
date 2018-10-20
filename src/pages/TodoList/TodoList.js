import React, { PureComponent, Fragment } from 'react';
import List from './components/List/List';
import Form from './components/Form/Form';
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../../store/list/action';

const mapStateToProps = state => {
    return { items: state.list.items};
};

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: ( payload ) => dispatch(addItem(payload)),
        onDeleteItem: ( payload ) => dispatch(deleteItem(payload)),
    };
};

class TodoList extends PureComponent {
    render () {
        const { items, onAddItem, onDeleteItem } = this.props;
        return (
            <Fragment>
                <List items={items} onDeleteItem={onDeleteItem}/>
                <Form onAddItem={onAddItem} />
            </Fragment>
        );
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( TodoList );
