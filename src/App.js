import React, { Component } from 'react';

import './App.css';

import { AsyncComponent } from  './components/SomeAsyncComponent';
import MultipleComponent from "./components/MultipleComponent";
import { ClientSidePreloadingComponent } from "./components/clientSidePreloading/ClientSidePreloadingComponent";
import { AsyncComponent as SSPComponent } from './components/ServerSideSelectivePreloading/SSSP';

class App extends Component {
    state = { clicked: false };
    onButtonClicked = (e) => {
        console.log("got e", e);
        this.setState((prevState) => ({clicked: !prevState.clicked}))
    }
  render() {
    let some = this.state.clicked ? <div>ALOALO</div> : <div>NAAAH</div>;
    return (
      <div className="App">
        <header className="App-header">
          <img src="./logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <AsyncComponent someComponentProperty={"Hi I am asink"}/>

            <br/>

            <MultipleComponent>
                // someComponentProperty={"Multiple component example"}
                // anotherComponentProperty={"Multiple component example"}>
            </MultipleComponent>

            <br/>

            <ClientSidePreloadingComponent/>

            <br/>

            <button onClick={this.onButtonClicked}>
                Click me
            </button>
            { some }
            <SSPComponent/>
        </p>
      </div>
    );
  }
}

export default App;
