import { FETCH_DATA } from '../const';
import { stringify } from 'query-string';

export const fetchData = () => {
    return async (dispatch,getState) => {
        const queryParams = stringify(getState().location.query);
        const api = `https://jsonplaceholder.typicode.com/users?${queryParams}`;
        const response = await fetch(api);
        const data = await response.json();
        return dispatch({ type:FETCH_DATA , payload: data });
    };
};
