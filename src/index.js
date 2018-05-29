import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

import Loadable from 'react-loadable';

window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            <App/>,
            document.getElementById('root')
        );
    });
};
unregister();
