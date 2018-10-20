import { fetchData } from '../User/action';

export const routesMap = {
    WELCOME: '/',
    TODOLIST: '/todolist',
    USER: {
        path: '/user',
        thunk: fetchData()
    },
};
