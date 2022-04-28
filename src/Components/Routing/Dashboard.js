import React from 'react'
import { useParams } from 'react-router-dom'

//in the dashboard component we should give some name in the url then it will reload the component
const Dashboard = () => {
  const {name}  = useParams();
  return (
    <div>
      <center>
    <h3>Welcome to dashboard</h3>
    <h4>Using path params-given parameter in the url as : {name}</h4>
</center>
    </div>
  )
}

export default Dashboard
