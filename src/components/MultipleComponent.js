import React from 'react';

import Loadable from 'react-loadable';

import LoadingComponent from './loadableHOC/LoadingComponent'
export default () => Loadable.Map({
    loader: {
        SomeComponent: () => import('./SomeComponent'),
        AnotherComponent: () => import('./AnotherComponent')
    },
    loading: LoadingComponent,
    render(loaded, props) {
        console.log('MAP loaded: ', loaded)
        // let SomeComponent = loaded.SomeComponent.default;
        // let AnotherComponent = loaded.AnotherComponent.default;
        return (
            <div>
                NABER
                {/*<SomeComponent someComponentProperty={ props.someComponentProperty }/>*/}
                {/*<br/>*/}
                {/*<AnotherComponent anotherComponentProperty={ props.anotherComponentProperty }/>*/}
            </div>);
    }
})