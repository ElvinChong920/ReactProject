import { createStore } from 'redux';
import rootReducer from './test/reducer';

const store = createStore(rootReducer);

export default store;
