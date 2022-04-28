//class component using fetch api and component didmount life cycle 

import React, { Component } from 'react'

export default class ClassComp extends Component {
  state={
    name:"skill hub",
    products : []
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos').then(
      res =>res.json()
    ).then(data => this.setState({products: data})).catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <center>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.setState({name:"telugu skil hub"})}>Change name</button>
        {this.state.products.map((product) => <li>{product.title}</li>)}
        </center>
      </div>
    )
  }
}