import React, { PureComponent, Fragment } from 'react';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { items: state.items};
};

class TodoList extends PureComponent {
    render () {
        const { items } = this.props;
        return (
            <Fragment>
                <List items={items}/>
                <Form />
            </Fragment>
        );
    }
}

export default connect(mapStateToProps)(TodoList);
