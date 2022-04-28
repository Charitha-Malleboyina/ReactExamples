import React, { useContext } from 'react'
import { store } from '../../App'
const CompB = () => {
    const [data,setData] = useContext(store)
  return (
    <div>
      component B {data}
    </div>
  )
}

export default CompB
