import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.anotherName}</h2>
      </div>
    )
  }
}
