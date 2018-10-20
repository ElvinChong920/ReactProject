import { FETCH_DATA } from '../const';

const initialState = {
    users : [],
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_DATA : {
        return {
            ...state,
            users: action.payload
        };
    }
    default:
        return state;
    }
};

export default listReducer;
