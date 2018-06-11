import React, { Component } from 'react';

import './App.css';

import { AsyncComponent } from  './components/SomeAsyncComponent';
import { ClientSidePreloadingComponent } from "./components/clientSidePreloading/ClientSidePreloadingComponent";
import { AsyncComponent as LateLoad } from './components/LateLoad/SSSP';

import { AsyncLibraryUserComponent } from './components/LibraryUser/AsyncLibraryUser';

class App extends Component {
    state = { clicked: false };
    onButtonClicked = (e) => {
        console.log("got e", e);
        this.setState((prevState) => ({clicked: !prevState.clicked}))
    }
  render() {
    let some = this.state.clicked ? <div>ALOALO</div> : <LateLoad/>;
    return (
      <div className="App">
        <header className="App-header">
          <img src="./logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <AsyncComponent someComponentProperty={"Hi I am asink"}/>

            <br/>

            <ClientSidePreloadingComponent/>

            <br/>

            <button onClick={this.onButtonClicked}>
                Click me
            </button>
            { some }

            <AsyncLibraryUserComponent libraryUserComponentProperty={"Prop from App to LibraryUser"}/>
        </p>
      </div>
    );
  }
}

export default App;
