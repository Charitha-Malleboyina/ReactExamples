import React, { useState } from 'react'
import {auth} from './Firebase';

const FirebaseAuth = () => { 
   
    const [data,setData] = useState({
        email: '',
        password: ''
})
    const {email,password} = data;
    const onChangeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(user =>console.log(user)).catch(err =>console.log(err))
    }
    const signIn = e => {
        e.preventDefault();
    }
  return (
    <div>
      <center>
          <h3>Authenticate</h3>
          <form autoComplete='off'>
              <input type="email" name='email' value={email} placeholder='email' onChange={onChangeHandler}/><br/><br/>
              <input type="password" name='password' value={password} placeholder='password' onChange={onChangeHandler}/><br/><br/>
              <input type="submit" value="SignUp" onClick={signUp} />&nbsp; &nbsp;
              <input type="submit" value="SignIn" onClick={signIn} />

          </form>
      </center> 
    </div>
  )
}

export default FirebaseAuth
