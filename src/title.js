import React, { Component } from 'react';

function Title() {
  return (
    <div>
      <h1 className="test">
        CELESTIAL TIC TAC TOE
        </h1>
      <h2>The World's Dullest Game</h2>
    </div>
  );
}

// class Title extends Component {
//   render() {
//     const name = 'Anna';
//     return (
//       <div>
//         <h1 className="test">
//           {this.props.name}
//           CELESTIAL TIC TAC TOE
//         </h1>
//         <h2>The World's Dullest Game</h2>
//       </div>
//     );
//   }
// }

export default Title;
