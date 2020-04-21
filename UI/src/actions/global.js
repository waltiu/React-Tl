import globalType from '../types/global'
let getBaseConfig=(params,dispatch,getState,callback,actionType)=>{
    console.log(dispatch)
    dispatch({
        type:globalType.DEFAULT_CONFIG,
        data:[123]
    })
}
module.exports={
    getBaseConfig:(params,callback)=>{
        return (dispatch,getState)=>{
             getBaseConfig(params,dispatch,getState,callback,globalType.DEFAULT_CONFIG)
        }
 
    },
    fetchOrders: (params) => {
            return (dispatch, getState) => {
                fetchOrders(dispatch, getState, params);
            };
        },
}
