import React from 'react';

import Loadable from 'react-loadable';
import LoadingComponent from './LoadingComponent';

export default function MyLoadable(opts) {
    return Loadable(Object.assign({
        loading: <LoadingComponent/>,
        delay: 200,
        timeout: 10,
        render: (loaded, props) => {
            let Component = loaded.default;
            return <Component {...props}/>;
        },
    }, opts));
};