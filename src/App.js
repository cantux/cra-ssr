import React, { Component } from 'react';
import './App.css';
import { AsyncComponent } from  './components/SomeAsyncComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <AsyncComponent asdf={"Hi I am asink"}/>
        </p>
      </div>
    );
  }
}

export default App;
