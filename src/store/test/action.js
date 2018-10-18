import { ADD_ITEM } from '../const';

// export const increment = state => ({ ...state, n: state.n + 1});
// export const change = state => ({ ...state, input: 'Changed'});

// export function createStore ( initialStore ) {
//     let currentStore = initialStore;
//     const getState = () => currentStore;
//     const dispatch = action => {
//         currentStore = action(currentStore);
//     };

//     return { getState, dispatch };
// }

export const addItem = item => ({ type: ADD_ITEM, payload: item });
