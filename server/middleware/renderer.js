const path = require("path");
const fs = require("fs");

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Loadable from 'react-loadable';

// import our main App component
import App from '../../src/App';
import { Provider as ReduxProvider } from 'react-redux';

import { getBundles } from 'react-loadable/webpack'
import stats from '../../build/react-loadable.json';

export default (store) => (req, res, next) => {
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
                <ReduxProvider store={store}>
                    <App/>
                </ReduxProvider>
            </Loadable.Capture>
        );

        console.log(modules);
        let bundles = getBundles(stats, modules);

        let styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
        let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));

        let scriptsText = scripts.map(script => {
                return `<script src="/${script.file}"></script>`
            }).join('\n')

        console.log(scriptsText);
        let stylesText = styles.map(style => {
                    return `<link href="/${style.file}" rel="stylesheet"/>`
            }).join('\n');
        console.log(stylesText);

        const reduxState = JSON.stringify(store.getState());

        const htmlString = htmlData
            .replace(
                '</head>',
                stylesText + '</head>'
            )
            .replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
            .replace(
                '</body>',
                `<script type="text/javascript" charSet="utf-8">
                    window.REDUX_STATE = ${reduxState};
                </script>` + '</body>'
            )
            .replace(
                '</body>',
                scriptsText + '</body>'
            )
        console.log(htmlString)
        res.send(htmlString);
        });
}