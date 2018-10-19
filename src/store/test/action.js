import { ADD_ITEM, DELETE_ITEM } from '../const';

export const addItem = title => ({ type: ADD_ITEM, title });
export const deleteItem = id => ({ type: DELETE_ITEM, id });
