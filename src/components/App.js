import React, { Component } from 'react';
import './App.css';
import TestComponent from './TestComponent';
import '../styles/index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestComponent />
      </div>
    );
  }
}

export default App;
