import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Loadable from 'react-loadable';

// import our main App component
import App from '../../src/App';
const path = require("path");
const fs = require("fs");

import { getBundles } from 'react-loadable/webpack'
import stats from '../../build/react-loadable.json';

export default (req, res, next) => {
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }
        // render the app as a string
        const modules = [];

        const html = ReactDOMServer.renderToString(
            <Loadable.Capture report={m => modules.push(m)}>
                <App/>
            </Loadable.Capture>
        );

        let bundles = getBundles(stats, modules);

        console.log(modules);


        console.log(bundles);
        res.send(`
          <!doctype html>
          <html lang="en">
            <head>...</head>
            <body>
              <div id="app">${html}</div>
              <script src="/dist/manifest.js"></script>
              ${bundles.map(bundle => {
                    return `<script src="/dist/${bundle.file}"></script>`
                }).join('\n')}
              <script src="/dist/main.js"></script>
            </body>
          </html>
        `);
        });
}