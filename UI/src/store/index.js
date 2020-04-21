/**
 * @auther sunqingwei
 * store
 */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

const thunkMiddleWare = require('redux-thunk').default

let middlewares = [
    thunkMiddleWare
];
/**
 *创建一个 Redux store 来以存放应用中所有的 state。
 *应用中应有且仅有一个 store。
 */

function configureStore(initialState) {
    let store = applyMiddleware(
        ...middlewares
    )(createStore)(rootReducer, initialState);
    return store;
}

module.exports = configureStore;