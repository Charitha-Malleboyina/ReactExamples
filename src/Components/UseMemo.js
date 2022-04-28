//useMemo hook
import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [count,setCount] = useState(0);
  const [num,setNum] = useState(5);
  const factorial = useMemo(()=>fact(num),[num]);
  return (
    <center>
      Factorial : {factorial}<br/>
      Count : {count}<br/>
      <button onClick={()=>setCount(count+1)}>Increment</button><br/>
      <button onClick={()=>setNum(num+1)}>factorial num Increment</button>
      </center>
  )
}

const fact =(n) => {
  let answer = 1;
  for(var i=n;i>=1; i--){
    answer = answer * i;
  }
  console.log('Factorial function calling');
  return answer;
}
export default UseMemo
