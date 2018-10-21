import { FETCH_DATA, FETCH_DETAIL, CLEAR_DETAIL } from '../const';

const initialState = {};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_DATA : {
        return {
            ...state,
            users: action.payload
        };
    }
    case FETCH_DETAIL : {
        return {
            ...state,
            userDetail: action.payload
        };
    }
    case CLEAR_DETAIL: {
        return {
            ...state,
            userDetail: undefined
        };
    }
    default:
        return state;
    }
};

export default listReducer;
