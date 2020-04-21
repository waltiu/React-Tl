module.exports = function (initialState, actionHandlerMap) {
    return (state = initialState, action) => {
        let handler = null;
        let type = action.type;
        if (type) {
            handler = actionHandlerMap[type];
        }
        if (handler) {
            return handler(state, action);
        }
        console.log(state,action,22)
        return state;
    };
};