import { GET_POKEMON, CLEAR_POKEMON, IS_LOADING } from '../const';

const initialState = {
    isLoading: false
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_POKEMON: {
        return {
            ...state,
            pokemon: action.payload,
            isLoading: false
        };
    }
    case CLEAR_POKEMON: {
        return {
            ...state,
            pokemon: undefined
        };
    }
    case IS_LOADING: {
        return {
            ...state,
            isLoading: true
        };
    }
    default:
        return state;
    }
};

export default pokemonReducer;
