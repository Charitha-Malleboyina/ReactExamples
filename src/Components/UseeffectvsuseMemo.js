//useEffect vs useMemo
import React, { useEffect, useMemo, useState } from 'react'

const UseeffectvsuseMemo = () => {
  const [effect,setEffect] = useState(0);
  const [memo,setMemo] = useState(0);
  useEffect(()=>{console.log('from useEffect'+effect)},[effect]);
  useMemo(() => {console.log('from useMemo'+memo)},[memo]);
  
  return (
    <center>
      <button onClick={() => setEffect(effect+1)}>UseEffect Increment</button><br/>
      <button onClick={() => setMemo(memo+1)}>UseMmeo Increment</button><br/>
    </center>
  )
}

export default UseeffectvsuseMemo
