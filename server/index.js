import express from 'express';

import serverRenderer from './middleware/renderer';

import Loadable from 'react-loadable';

const PORT = 3000;
const path = require('path');

const app = express();


import configureStore from '../src/store/configureStore';
import { setPreloadedMessage } from '../src/store/actions';
const actionIndex = (req, res, next) => {
    const store = configureStore();
    store.dispatch(setPreloadedMessage("Hi, I'm from server!"));
    serverRenderer(store)(req, res, next)
};

const router = express.Router();
router.use('^/$', actionIndex);

router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.use(router);

Loadable.preloadAll().then(() => {
    app.listen(PORT, (error) => {
        if (error) {
            return console.log('something bad happened', error);
        }

        console.log("listening on " + PORT + "...");
    });
});
