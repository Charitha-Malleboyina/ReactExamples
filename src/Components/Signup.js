//signup form with form validations

import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
  const [data,setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const {username,email,password,confirmPassword} = data;
  const handler = e => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e=>{
    e.preventDefault();
    if(username.length <=5){
      alert("characters should be more than 5")
    }
    else if(password !== confirmPassword){
      alert("passwords are not matching");
    }else{
      //console.log(data);
      axios.post('https://reactexamples-b84b0-default-rtdb.firebaseio.com/register.json',data).then(() => alert("Submitted Successfully"))
    }

  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <center>
        <label>UserName </label>
        <input type="text"  placeholder='Enter your name' name='username' value={username} onChange={handler}/><br/>
        <label>Email </label>
        <input type="email" placeholder='Enter your email id' name='email' value={email} onChange={handler}/><br/>
        <label>Password </label>
        <input type="password" placeholder='Enter your Password' name='password' value={password} onChange={handler}/><br/>
        <label>Confirm Password </label>
        <input type="password" placeholder='Enter your Password Again' name='confirmPassword' value={confirmPassword} onChange={handler}/><br/>
        {password!== confirmPassword ? <p style={{"color":"red"}}>*passwords are not matching</p>:null}
        <input type="submit" name='submit'/>
        {console.log("hi")}
        </center>
      </form>
    </div>
  )
}

export default Signup