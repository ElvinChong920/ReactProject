import { ADD_ITEM, DELETE_ITEM } from '../const';

const initialState = {
    items : [
        {
            id: 'Fri Oct 18 2018 00:00:00 GMT+0800 (Singapore Standard Time)',
            title: 'Hello World'
        }
    ],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ITEM : {
        return { ...state, items: [...state.items, { id: new Date(), title: action.title }]};
    }
    case DELETE_ITEM : {
        const newItems = state.items.filter( item => item.id !== action.id);
        return {
            ...state,
            items: newItems
        };
    }
    default:
        return state;
    }
};

export default rootReducer;
