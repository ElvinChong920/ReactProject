import React, { PureComponent, Fragment } from 'react';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';
import { connect } from 'react-redux';
import { addItem, deleteItem, fetchData } from '../../store/test/action';

const mapStateToProps = state => {
    return { items: state.items};
};

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: ( payload ) => dispatch(addItem(payload)),
        onDeleteItem: ( payload ) => dispatch(deleteItem(payload)),
        onFetchData: () => dispatch(fetchData())
    };
};

// const getData = async () => {
//     const api = 'https://jsonplaceholder.typicode.com/users';
//     const response = await fetch(api);
//     const data = await response.json();
//     console.log(data);
// };

class TodoList extends PureComponent {
    render () {
        const { items, onAddItem, onDeleteItem, onFetchData } = this.props;
        return (
            <Fragment>
                <List items={items} onDeleteItem={onDeleteItem}/>
                <Form onAddItem={onAddItem} />
                <button onClick={()=>onFetchData()}>Get API Data</button>
            </Fragment>
        );
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( TodoList );
