import { WELCOME, TODOLIST, USER, USERDETAIL, POKEMON, REDUXFORM} from '../Route/routeNames';
import { DEFAULTTITLE, WELCOMETITLE, TODOLISTTITLE, USERTITLE, USERDETAILTITLE, POKEMONTITLE, REDUXFORMTITLE } from './titleNames';

const titleReducer = (state = DEFAULTTITLE, action = {}) => {
    switch (action.type) {
    case WELCOME:
        return WELCOMETITLE;
    case TODOLIST:
        return TODOLISTTITLE;
    case USER:
        return USERTITLE;
    case USERDETAIL:
        return `${USERDETAILTITLE} - ${action.payload.userName}`;
    case POKEMON: {
        return POKEMONTITLE;
    }
    case REDUXFORM: {
        return REDUXFORMTITLE;
    }
    default:
        return state;
    }
};

export default titleReducer;
