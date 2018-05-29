import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Loadable from 'react-loadable';

// import our main App component
import App from '../../src/App';
const path = require("path");
const fs = require("fs");
import manifest from '../../build/asset-manifest.json';
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
        console.log(modules);


        console.log(manifest);
        // const selectAssets = (modules, ) => Object.keys(assets)
        //     .filter(asset => chunks.indexOf(asset.replace('selective', '')) > -1)
        //     .map(k => assets[k]);

        // then, after Loadable.Capture
        // console.log(selectAssets(manifest, modules));

        // const extraChunks = extractAssets(manifest, modules)
        //     ;

        // inject the rendered app into our html and send it
        return res.send(
            htmlData
                .replace(
                    '<div id="root"></div>',
                    `<div id="root">${html}</div>`
                )
                // .replace(
                //     '</body>',
                //     extraChunks.join('') + '</body>'
                // )
        );
    });
}