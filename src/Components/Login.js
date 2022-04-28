//Login form

import React, { useState } from 'react'

const Login = () => {
  const [data,setData] = useState({
    username :'',
    password :''
  })
  const {username,password} = data;
  const handler = e => {
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <input type="text" name="username" value={username} onChange={handler} placeholder='Enter your name'/><br/>
        <input type="password" name="password" value={password} onChange={handler} placeholder='Enter your password'/><br/>
        <input type="Submit" name='submit' />
        </form>
      </center>
    </div>
  )
}
export default Login