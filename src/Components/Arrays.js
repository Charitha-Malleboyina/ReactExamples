//arrays 
import React from 'react'
const Arrays = () => {
  const arr =[10,20,30,40,50,60,70,80,90]
  //const names= ['john','James','marinda','Paul','ringo'];
  //const filtered = names.filter(name => name.includes('m'))
  const filtered = arr.filter(item => item>40)
  return (
    <div>
      {
        filtered.map(item =><li>{item}</li>)
      }
    </div>
  )
}
export default Arrays