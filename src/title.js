import React, { Component } from 'react'

class Title extends Component {
    render() {
        const name = "Joe"
        return (
        <div>
          <h1 className="test">{this.props.name}Lets Play Tic Tac Toe!</h1>
        </div>
        )
    }
}

export default Title
