const initialState = {
    preloadedMessage: null,
    clientMessage: null,
    wrongPreloadedMessage: null
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
        case 'SET_WRONG_PRELOADED_MESSAGE':
            return {
                ...state,
                wrongPreloadedMessage: action.wrongPreloadedMessage,
            };

        default:
            return state;
    }
};