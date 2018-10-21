import { fetchData, fetchDetail } from '../User/action';
import { fetchPokemon } from '../Pokemon/action';

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
    },
    POKEMON: {
        path: '/pokemon',
        thunk: fetchPokemon()
    }
};
