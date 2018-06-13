const initialState = {
    preloadedMessage: null,
    clientMessage: null,
    asyncMessage: null
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PRELOADED_MESSAGE':
            return {
                ...state,
                preloadedMessage: action.preloadedMessage,
            };
        case 'SET_CLIENT_MESSAGE':
            return {
                ...state,
                clientMessage: action.clientMessage,
            };
        case 'SET_ASYNC_MESSAGE':
            return {
                ...state,
                asyncMessage: action.asyncMessage,
            };

        default:
            return state;
    }
};