import { FETCH_DATA, FETCH_DETAIL, CLEAR_DETAIL } from '../const';

export const fetchData = () => {
    return async (dispatch) => {
        const api = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(api);
        const data = await response.json();
        return dispatch({ type:FETCH_DATA , payload: data });
    };
};

export const fetchDetail = () => {
    return async (dispatch,getState) => {
        dispatch({ type:CLEAR_DETAIL });
        const userId = getState().location.payload.userId;
        const api = `https://jsonplaceholder.typicode.com/users/${userId}`;
        const response = await fetch(api);
        const data = await response.json();
        return dispatch({ type:FETCH_DETAIL , payload: data });
    };
};
