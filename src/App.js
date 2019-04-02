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



      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    // );



export default App;
