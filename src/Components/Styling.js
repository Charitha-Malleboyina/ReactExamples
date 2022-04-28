//styling concepts

import React from 'react'
import './App.css';
const Styling = () => {
  const stylingVariable={
    color:"white",backgroundColor:"lightpink",textAlign:"center",padding:"50px"
  }
  return (
    <div className="container">
      <h1>Hello World!!</h1>
      <h3 style={{color:"white",backgroundColor:"lightblue",textAlign:"center",padding:"50px"}}>Inline styling</h3>
      <h2 style={stylingVariable}>another way of using styling where we can add styling using variable</h2>
    </div>
  )
}
export default Styling