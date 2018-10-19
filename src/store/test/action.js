import { ADD_ITEM, DELETE_ITEM, FETCH_DATA } from '../const';

export const addItem = title => ({ type: ADD_ITEM, title });
export const deleteItem = id => ({ type: DELETE_ITEM, id });

export const fetchData = () => {
    return async dispatch => {
        const api = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(api);
        const data = await response.json();
        return dispatch({ type:FETCH_DATA , payload: data });
    };
};
