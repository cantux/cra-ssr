import React from 'react';

import { LoadableMyComponent } from './ToBeFetchedComponent';

export class ClientSidePreloadingComponent extends React.Component {
    state = { showComponent: false };

    onClick = () => {
        this.setState({ showComponent: true });
    };

    onMouseOver = () => {
        // MAGIC HAPPENS HERE
        // preload function intentionally does not return a Promise.
        // It's said to be just a performance optimization not something UI logic should depend on.
        LoadableMyComponent.preload();
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick} onMouseOver={this.onMouseOver}>
                    Show loadable component
                </button>
                {this.state.showComponent && <LoadableMyComponent/>}
            </div>
        )
    }
}