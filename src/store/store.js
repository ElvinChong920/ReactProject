import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import listReducer from './test/reducer';
import thunk from 'redux-thunk';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import { routesMap } from './routesMap.js';

const history = createHistory();

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);
const rootReducer = combineReducers({
    location: reducer,
    list: listReducer
});
const middlewares = applyMiddleware(middleware, thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(enhancer, middlewares);

const store = createStore(rootReducer, enhancers);

export default store;
