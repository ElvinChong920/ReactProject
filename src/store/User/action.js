import { FETCH_DATA } from '../const';

export const fetchData = () => {
    return async dispatch => {
        const api = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(api);
        const data = await response.json();
        return dispatch({ type:FETCH_DATA , payload: data });
    };
};
