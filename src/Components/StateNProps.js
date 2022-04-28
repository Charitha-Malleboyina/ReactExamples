//states and props example another Display.js component created
import React, { Component } from 'react'
import Display from './Display'

export default class StateNProps extends Component {
  state={
    name:"state variable",
    anotherName:"another variable for using props"
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <Display anotherName={this.state.anotherName}></Display>
      </div>
    )
  }
}

