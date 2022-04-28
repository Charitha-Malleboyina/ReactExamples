//UseState 
import React, { useState } from 'react'
const UseState = () => {
  const [Name,setName] =useState("UseState react hook")
  return (
    <div>
      <center>
        <h2>{Name}</h2>
        <button onClick={()=>setName("Using UseState react hook")}>Click Here</button>
      </center>
    </div>
  )
}
export default UseState
