import React, { Component } from 'react';

import './App.css';

import { AsyncComponent } from  './components/SomeAsyncComponent';
import { ClientSidePreloadingComponent } from "./components/clientSidePreloading/ClientSidePreloadingComponent";
import { AsyncComponent as PreloadedComponent } from './components/ServerSidePreload/SSSP';

import { AsyncComponent as AsyncDynamicImported } from './components/DynamicallyImported/AsyncDynamicImported';

import { AsyncLibraryUserComponent } from './components/LibraryUser/AsyncLibraryUser';

import ClientSideRedux from './components/Redux/ClientSideRedux';
import PreloadedRedux from './components/Redux/PreloadedRedux';
import IsomorphicFetch from './components/Redux/IsomorphicFetch';

class App extends Component {
    state = { clicked: false, retrieveClicked: false };
    onButtonClicked = (e) => {
        this.setState((prevState) => ({clicked: !prevState.clicked}))
    }
    onRetrieveButtonClicked = (e) => {
        this.setState((prevState) => ({retrieveClicked: !prevState.retrieveClicked}))
    }
  render() {

    let toBeRetrieved = this.state.retrieveClicked
        ? <AsyncDynamicImported anotherComponentProperty={"See that new chunk was retrieved"}/>
        : <div>We will get the component from server if you click to button below</div>;
    let preloaded = this.state.clicked
        ? <div>We already got to this point in the first render so Loadable preloaded this</div>
        : <PreloadedComponent preloadedComponentProperty={"We don't fetch this again"}/>;

    return (
      <div className="App">
        <header className="App-header">
          <img src="./logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">

            1)
            <AsyncComponent someComponentProperty={"Hi I am asink"}/>

            <hr/>

            2)
            <ClientSidePreloadingComponent/>

            <hr/>
            3)
            { toBeRetrieved }
            <button onClick={this.onRetrieveButtonClicked}>
                Click to dynamically import component
            </button>

            { preloaded }
            <button onClick={this.onButtonClicked}>
                Click to show already loaded component
            </button>

            <hr/>
            4)
            <AsyncLibraryUserComponent libraryUserComponentProperty={"Prop from App to LibraryUser"}/>

            <hr/>
            5)
            <PreloadedRedux/>
            <ClientSideRedux/>
            <hr/>
            6)
            <IsomorphicFetch/>
        </div>
      </div>
    );
  }
}

export default App;
