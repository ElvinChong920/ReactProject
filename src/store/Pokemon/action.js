import { GET_POKEMON, CLEAR_POKEMON, IS_LOADING } from '../const';
import config from '../../config';

export const fetchPokemon = () => {
    return async (dispatch, getState) => {
        const query = getState().location.query;
        if (query && query.name) {
            dispatch({type: CLEAR_POKEMON });
            dispatch({ type: IS_LOADING });
            const url = `${config.public.pokemonApiUrl}/${query.name.toLowerCase()}/`;
            try {
                const response = await fetch(url,{headers:{}});
                const data = await response.json();
                return dispatch({ type: GET_POKEMON, payload: data});
            } catch {
                return dispatch({ type:GET_POKEMON, payload:[]});
            }
        } else {
            return dispatch({type: 'GET_DEFAULT'});
        }
    };
};
