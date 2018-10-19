// import { NOT_FOUND } from 'redux-first-router';
import { FETCH_DATA } from './const';

export const routesMap = {
    HOME: '/',
    USER: {
        path: '/user',
        thunk: async (dispatch) => {
            const api = 'https://jsonplaceholder.typicode.com/users';
            const response = await fetch(api);
            const data = await response.json();
            return dispatch({ type:FETCH_DATA , payload: data });
        }
    }
};
