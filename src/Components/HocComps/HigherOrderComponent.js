//Hoc example (higher order component)

import React from 'react';
import HOC from './Components/HOC';

const HigherOrderComponent = (props) => {
  return (
    <div>
      <h1>Welcome user !! {props.name}</h1>
    </div>
  )
}
export default HOC(HigherOrderComponent)
