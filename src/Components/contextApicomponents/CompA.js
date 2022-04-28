import React, {useContext} from 'react'
import { store } from '../../App'
const CompA = () => {
    const [data,setData] = useContext(store)
  return (
    <div>
      comp A {data}
    </div>
  )
}

export default CompA
