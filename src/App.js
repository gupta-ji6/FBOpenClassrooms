import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Clock from './Clock';
import ColoredBlock from './ColoredBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <ColoredBlock />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
