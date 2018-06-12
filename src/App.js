import React, { Component } from 'react';

import './App.css';

import { AsyncComponent } from  './components/SomeAsyncComponent';
import { ClientSidePreloadingComponent } from "./components/clientSidePreloading/ClientSidePreloadingComponent";
import { AsyncComponent as LateLoad } from './components/LateLoad/SSSP';

import { AsyncLibraryUserComponent } from './components/LibraryUser/AsyncLibraryUser';

import ClientSideRedux from './components/Redux/ClientSideRedux';
import PreloadedRedux from './components/Redux/PreloadedRedux';

class App extends Component {
    state = { clicked: false };
    onButtonClicked = (e) => {
        this.setState((prevState) => ({clicked: !prevState.clicked}))
    }
  render() {

    let toBeRetrieved = this.state.clicked ? <LateLoad/> : <div>We will not go back to server if you click to button below</div>;
    let preloaded = this.state.clicked ? <div>We already got to this point in the first render so Loadable preloaded this</div> : <LateLoad/>;

    return (
      <div className="App">
        <header className="App-header">
          <img src="./logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
            <AsyncComponent someComponentProperty={"Hi I am asink"}/>

            <hr/>

            <ClientSidePreloadingComponent/>

            <hr/>

            {/*{ toBeRetrieved }*/}
            { preloaded }
            <button onClick={this.onButtonClicked}>
                Click to show already loaded component
            </button>

            <hr/>

            <AsyncLibraryUserComponent libraryUserComponentProperty={"Prop from App to LibraryUser"}/>

            <hr/>

            <PreloadedRedux/>
            <ClientSideRedux/>
        </div>
      </div>
    );
  }
}

export default App;
