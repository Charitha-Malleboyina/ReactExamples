//UseEffect
import React, { useEffect, useState } from 'react'
const UseEffect = () => {
  const [Count,setCount] =useState(0);
  useEffect(()=> console.log(Count),[Count])
  return (
    <div>
      <center>
        <p>You clicked {Count} times</p>
        <button onClick={()=>setCount(Count+1)}>Click Here</button>
      </center>
    </div>
  )
}
export default UseEffect
