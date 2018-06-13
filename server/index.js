import express from 'express';

import serverRenderer from './middleware/renderer';

import Loadable from 'react-loadable';

const PORT = 3000;
const path = require('path');

const app = express();

const apiRouter = require('./api/messageController');

import configureStore from '../src/store/configureStore';
import { setPreloadedMessage, setAsyncMessage } from '../src/store/actions';
import {getMessage} from "../src/services/Message";
const actionIndex = (req, res, next) => {
    const store = configureStore();
    store.dispatch(setPreloadedMessage("Hi, I'm from server!"));
    getMessage().then((body) =>
    {
        store.dispatch(setAsyncMessage(body.message))
        serverRenderer(store)(req, res, next)
    }).catch(e => {
        res.status(400).send(e)
    });
};

const router = express.Router();
router.use('^/$', actionIndex);

router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

router.use('/api', apiRouter);

app.use(router);

Loadable.preloadAll().then(() => {
    app.listen(PORT, (error) => {
        if (error) {
            return console.log('something bad happened', error);
        }

        console.log("listening on " + PORT + "...");
    });
});
