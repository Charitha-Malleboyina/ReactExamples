//emailjs code

import React, {useState} from 'react'
import emailjs from '@emailjs/browser';

const Emailjs = () => {
  const [data,setData] = useState({
    subject:'',
    reciever:'',
    name:'',
    message:''
  })
    const {subject,reciever,name,message} = data;
  const changeHandler = (e) => {
    
      setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e => {
    e.preventDefault();

    emailjs.sendForm('service_i3rrfhe', 'template_77phg6d',e.target,'n356oVH-fAmDLtwwu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  
    

  return (
    <div>
    <form onSubmit={submitHandler} autoComplete="off"><br/>
      <label >Subject:</label><br />
      <input type="text" name="subject" value={subject} onChange={changeHandler}/><br/><br/>
      <label >Reciever:</label><br />
      <input type="text" name="reciever" value={reciever} onChange={changeHandler}/><br/><br/>
      <label >Name:</label><br />
      <input type="text" name="name" value={name} onChange={changeHandler}/><br/><br/>
      <label>Message</label>
      <input type='text' name="message" value={message} onChange={changeHandler}/><br/><br/>
      <input type="submit" value="submit" />
    </form>
    </div>
  );
};

export default Emailjs
