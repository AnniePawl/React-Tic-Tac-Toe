import React, { Component } from 'react';
import Title from './title'
import logo from './logo.svg';
import './App.css';

class App extends Component {
// render method simply returns something
    render() {
        const name = "Joe"
        return (
        <div>
            <Title name="Soggy" age="459"/>
            <Title name="Mushy Pancake" age="697"/>
            <Title name="Bird Jelly" age="2"/>
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
