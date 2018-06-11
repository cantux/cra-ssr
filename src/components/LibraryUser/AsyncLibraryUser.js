import React from 'react';

import Loadable from 'react-loadable';

import LodingComponent from '../loadableHOC/LoadingComponent';

export const AsyncLibraryUserComponent = Loadable({
    loader: () => import("./LibraryUserComponent"),
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props}/>;
    },
    loading: () => <LodingComponent/>
});