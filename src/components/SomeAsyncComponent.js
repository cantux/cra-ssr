import React from 'react';

import Loadable from 'react-loadable';

export const AsyncComponent = Loadable({
    loader: () => import("./SomeComponent"),
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    },
    loading: () => <div>loading...</div>,
});