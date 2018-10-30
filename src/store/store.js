import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import listReducer from './List/reducer';
import userReducer from './User/reducer';
import titleReducer from './Title/reducer';
import thunk from 'redux-thunk';
import queryString from 'query-string';
import { connectRoutes } from 'redux-first-router';
import { reducer as formReducer } from 'redux-form'
// import createHistory from 'history/createBrowserHistory';
import { routesMap } from './Route/routesMap.js';
import pokemonReducer from './Pokemon/reducer';

// const history = createHistory();

const { reducer, middleware, enhancer } = connectRoutes( routesMap, {
    querySerializer: queryString
} );
const rootReducer = combineReducers({
    location: reducer,
    title: titleReducer,
    list: listReducer,
    user: userReducer,
    pokemon: pokemonReducer,
    form: formReducer
});
const middlewares = applyMiddleware(middleware, thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(enhancer, middlewares);

const store = createStore(rootReducer, enhancers);

export default store;
