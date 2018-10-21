import { WELCOME, TODOLIST, USER, USERDETAIL} from '../Route/routeNames';
import { DEFAULTTITLE, WELCOMETITLE, TODOLISTTITLE, USERTITLE, USERDETAILTITLE } from './titleNames';

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
    default:
        return state;
    }
};

export default titleReducer;
