import createReducer from '../tools/createReducer'
import globalType from '../types/global'
let initialState = {
   test:1
};
module.exports = createReducer(initialState, {
   [globalType.DEFAULT_CONFIG](state, action) {
        return {
            ...state,
            defaultConfig: action.data
        }
    }})