//map function using array and array of objects

import React from 'react'
const Map = () => {
  //using arrays
  const arr=["React Js", "Node Js","Express Js","Angular Js"]
  //using array of objects
  /*const arr = [
    {
      id:1,
      title:"React Js"
    },
    {
      id:2,
      title:"Node Js"
    },
    {
      id:3,
      title:"Express Js"
    },
    {
      id:4,
      title:"Angular Js"
    }
  ]*/
  return (
    <div>
      {
        arr.map(
          //mapping regarding arrays
          (value,index)=> <li key={index}>{value}</li>
          //mapping regarding array of objects
          //(value) => <li key={value.id}>{value.id}</li>
        )
      }
    </div>
  )
}
export default Map
