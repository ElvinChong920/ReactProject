import { fetchData, fetchDetail,  } from '../User/action';

export const routesMap = {
    WELCOME: '/',
    TODOLIST: '/todolist',
    USER: {
        path: '/user',
        thunk: fetchData()
    },
    USERDETAIL: {
        path: '/userdetail/:userId',
        thunk: fetchDetail()
    }
};
