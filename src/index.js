import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

import Loadable from 'react-loadable';

import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './store/configureStore';

console.log(window.REDUX_STATE);
const store = configureStore(window.REDUX_STATE || {});

window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            <ReduxProvider store={store}>
                <App />
            </ReduxProvider>,
            document.getElementById('root')
        );
    });
};

////////
// COMMENT OUT HYDRATE ABOVE AND USE THE FOLLOWING WHILE DEVELOPMENT
///////
// ReactDOM.render(
//     <ReduxProvider store={store}>
//         <App />
//     </ReduxProvider>,
//     document.getElementById('root')
// );

unregister();
