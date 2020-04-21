let initialState = {
   test:1
};
module.exports={
    test:(state,action)=>{
        return {
            ...state,
            testInfo:action.data
        }
    }
}