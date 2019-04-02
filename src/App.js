import React, { Component } from 'react';
import Title from './title';
import Square from './square';
import Game from './game';
import './App.css';

class App extends Component {
// render method simply returns something
  render() {
    const name = "Joe"
    return (
      <div>
        <Title />
        <Game/>
      </div>
    )
  }
}

export default App;
