//onSubmit()
import React, { useState } from 'react'

const OnSubmit = () => {
  const [data,setData] = useState({
    username:'',
    password:'',
  });
  //destructuring concept
  const {username,password} = data;
  const handler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder='UserName' value={username} name="username" onChange={handler}/><br/>
        {username}
        <input type="password" placeholder='Password'name="password" onChange={handler} value={password} /><br/>
        {password}
        <button type='submit' name='submit'>Submit</button>
        </form>
      </center>
    </div>
  )
}

export default OnSubmit
