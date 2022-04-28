//getting data through api using fetch

import React, { useEffect, useState } from 'react'

const FetchApi = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => setData(json))
  },[])
  return (
    <div>
      {data.map(item =><li key={item.id}>{item.id}</li>)}
      
    </div>
  )
}
export default FetchApi
