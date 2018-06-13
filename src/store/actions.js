import { getMessage } from '../services/Message';

export const setPreloadedMessage = messageText => ({ type: 'SET_PRELOADED_MESSAGE', preloadedMessage: messageText });

export const setClientMessage = messageText => ({ type: 'SET_CLIENT_MESSAGE', clientMessage: messageText });

export const setAsyncMessage = messageText => ({ type: 'SET_ASYNC_MESSAGE', asyncMessage: messageText });

export const setAsyncMessageMockThunk = messageText => dispatch => (
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 2000);
        }).then(
            () => dispatch(setAsyncMessage(messageText))
        )
    );

export const setAsyncMessageThunk = extraArgs => dispatch => (
    getMessage.then((body) => (dispatch(setAsyncMessage(body.message))))
);
