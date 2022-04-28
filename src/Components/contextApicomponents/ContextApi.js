//contextapi

import React, { createContext,useState } from 'react'
import Count from './Components/ShoppingcartComps/Count';
import Show from './Components/ShoppingcartComps/Show';
//import CompA from './Components/contextApicomponents/CompA'
//import CompB from './Components/contextApicomponents/CompB'

export const store = createContext();
const ContextApi = () => {
  //this variables are used for contextapi simple count example
  //const [data,setData] = useState(0);
  const [data,setData] = useState([
    {
      brandname : "MIUI"
    },
    {
      brandname : "Realme"
    },
    {
      brandname : "Oneplus"
    }
  ])
  return (
    <store.Provider value={[data,setData]}>
    <center>
     {/* <CompA/>
      <CompB/>
  <button onClick={() =>setData(data+1)}>Increment</button>*/}
   /* <Count/>
    <Show/>
    </center>
    </store.Provider>
    
  )
}
export default ContextApi.js
