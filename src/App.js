import React, { Component } from 'react';
import Nav from './components/Navigation/Navigation';
import Body from './components/Body/Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}

export default App;
