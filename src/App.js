import React, { Component } from 'react';
import Title from './Title';
import Square from './Square';
import Game from './Game';
import './App.css';

class App extends Component {
  // render method simply returns something
  render() {
    const name = 'Joe';
    return (
      <div>
        <Title />
        <Game />
      </div>
    );
  }
}

export default App;
