import React, { Component } from 'react'

class Title extends Component {
    render() {
        const name = "Joe"
        return (
        <div>
          <h1 className="test">{this.props.name}Hello Poo!</h1>
          <p className="butter">{this.props.age}</p>
        </div>
        )
    }
}

export default Title
