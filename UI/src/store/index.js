import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/index'
const thunkMiddle=require('react-thunk').default
const middlewares={
    thunkMiddle
}
module.exports=(initialState)=>{
    return applyMiddleware(
        ...middlewares
    )(createStore)(reducers, initialState);
}
