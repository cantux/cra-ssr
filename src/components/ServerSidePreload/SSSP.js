import React from 'react';

import Loadable from 'react-loadable';

import LodingComponent from '../loadableHOC/LoadingComponent';

export const AsyncComponent = Loadable({
    loader: () => import('./NamedChunkComponent'),
    delay: 0,
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    },
    loading: () => <LodingComponent/>
});