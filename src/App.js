/*import React from 'react';

export const App=() =>{
  return(
    <div>
      <h1>Hello World!!</h1>
    </div>
  )
}

export default App;*/

//class component

/*import React, { Component } from 'react';

class App extends Component {
  state={
    name:'state in class component'
  }
  render() {
    return (
      <div>
        <h2>React intro to {this.state.name}</h2>
      </div>
    );
  }
}

export default App;*/

//functional component
/*import React,{useState} from 'react'

const App = () => {
  const [name,setName] = useState("using useState react hook")
  return (
    <div>
      <h2>React intro to functional component and {name}</h2>
    </div>
  )
}

export default App*/

//states and props example another Display.js component created
/*import React, { Component } from 'react'
import Display from './Display'

export default class App extends Component {
  state={
    name:"state variable",
    anotherName:"another variable for using props"
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <Display anotherName={this.state.anotherName}></Display>
      </div>
    )
  }
}*/

//styling concepts
/*
import React from 'react'
import './App.css';
const App = () => {
  const stylingVariable={
    color:"white",backgroundColor:"lightpink",textAlign:"center",padding:"50px"
  }
  return (
    <div className="container">
      <h1>Hello World!!</h1>
      <h3 style={{color:"white",backgroundColor:"lightblue",textAlign:"center",padding:"50px"}}>Inline styling</h3>
      <h2 style={stylingVariable}>another way of using styling where we can add styling using variable</h2>
    </div>
  )
}
export default App*/

//onclick event
/*import React from 'react'
const App = () => {
  return (
    <div>
      <button onClick={()=>console.log("clicked")}>Click Here</button>
    </div>
  )
}
export default App
*/
//UseState 
/*
import React, { useState } from 'react'
const App = () => {
  const [Name,setName] =useState("UseState react hook")
  return (
    <div>
      <center>
        <h2>{Name}</h2>
        <button onClick={()=>setName("Using UseState react hook")}>Click Here</button>
      </center>
    </div>
  )
}
export default App
*/
//UseEffect
/*
import React, { useEffect, useState } from 'react'
const App = () => {
  const [Count,setCount] =useState(0);
  useEffect(()=> console.log(Count),[Count])
  return (
    <div>
      <center>
        <p>You clicked {Count} times</p>
        <button onClick={()=>setCount(Count+1)}>Click Here</button>
      </center>
    </div>
  )
}
export default App
*/
/*
import React, { useState } from 'react'
const App = () => {
  const [user,setUser] = useState("");
  const handler = e =>{
    setUser(e.target.value)
  }
  return (
    <div>
      <center>
        <input type="text" placeholder='username' value={user} name="user"
        onChange={handler}/><br/>
        {user}
      </center>
    </div>
  )
}
export default App
*/
//onSubmit()
/*
import React, { useState } from 'react'

const App = () => {
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

export default App
*/
//map function using array and array of objects
/*
import React from 'react'
const App = () => {
  //using arrays
  const arr=["React Js", "Node Js","Express Js","Angular Js"]
  //using array of objects
  /*const arr = [
    {
      id:1,
      title:"React Js"
    },
    {
      id:2,
      title:"Node Js"
    },
    {
      id:3,
      title:"Express Js"
    },
    {
      id:4,
      title:"Angular Js"
    }
  ]*/
 /* return (
    <div>
      {
        arr.map(
          //mapping regarding arrays
          (value,index)=> <li key={index}>{value}</li>
          //mapping regarding array of objects
          //(value) => <li key={value.id}>{value.id}</li>
        )
      }
    </div>
  )
}
export default App
*/
/*
import React from 'react'
const App = () => {
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
export default App
*/
/*
import React from 'react';
//if we use just export in the component we use { } in the import sttement
import { Footer } from './Components/Footer';
//if we use just export default in the component we use { } in the import sttement
import Header from './Components/Header'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Home/>
      <Header/>
      <Footer/>
    </div>
  )
}
export default App
*/
//Login form
/*
import React, { useState } from 'react'

const App = () => {
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
export default App
*/
//signup form with form validations
/*
import axios from 'axios';
import React, { useState } from 'react'

const App = () => {
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
        </center>
      </form>
    </div>
  )
}

export default App
*/
//calculator app
/*
import React, { useState } from 'react'

const App = () => {
  const [input,setInput] = useState("");
  const [result,setResult] = useState(0)
  const handler = e => {
    setInput(e.target.value);
  }
  return (
    <div>
      <center>
        <input type="text" value={input} name="input" onChange={handler}/><br/>
     
        <button onClick={() =>setResult(eval(input))}>Result</button>
        <h4>Result is : {result}</h4>

        
        <button onClick={()=> setInput(input+'1')}>1</button>
        <button onClick={()=> setInput(input+'2')}>2</button>
        <button onClick={()=> setInput(input+'3')}>3</button>
        <button onClick={()=> setInput(input+'4')}>4</button>
        <button onClick={()=> setInput(input+'5')}>5</button><br/>

        <button onClick={()=> setInput(input+'6')}>6</button>
        <button onClick={()=> setInput(input+'7')}>7</button>
        <button onClick={()=> setInput(input+'8')}>8</button>
        <button onClick={()=> setInput(input+'9')}>9</button>
        <button onClick={()=> setInput(input+'0')}>0</button><br/>

        <button onClick={()=> setInput(input+'+')}>+</button>
        <button onClick={()=> setInput(input+'-')}>-</button>
        <button onClick={()=> setInput(input+'/')}>/</button>
        <button onClick={()=> setInput(input+'*')}>*</button>
        <button onClick={()=> setInput('')}>clr</button><br/>
      </center>
    </div>
  )
}

export default App
*/
//getting data through api using fetch
/*
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => setData(json))
  },[])
  return (
    <div>
      {data.map(item =><li key={item.id}>{item.title}</li>)}
    </div>
  )
}
export default App
*/
//axios 
/*
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      response=> setData(response.data)
    )
  })
  return (
    <div>
      {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default App
*/

/*
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Header from './Components/Header';

export const UserContext = React.createContext();
const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
        <Navbar/>
        <UserContext.Provider value="sending value from one component to another using useContext">
          <Header/>
        </UserContext.Provider>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/dashboard/:name" element={<Dashboard/>}/>
          <Route exact path="/about" element={<About/>}/>
          
        </Routes>
        </BrowserRouter>
       
      </div>
    </div>
  )
}
export default App
*/
/*
import React from 'react';
import Inc from './Components/Redux/Inc';
import {connect} from 'react-redux';
//import { increase,decrease } from './Components/Redux/actions';
const App = ({count}) => {
  return (
    <div>
      <center>
        Count from App js component : {count} <br/><hr/>
        <Inc/>
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  count : state
})
const mapDispatchToProps = (dispatch) => {
  return {
    //displaying plain actions
    increase: (value) => dispatch({type: 'INCREMENT',
  payload:value}),
    decrease: () => dispatch({type: 'DECREMENT'}),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
*/
/*
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count:0
    };
  }
  delHeader = () => {
    this.setState({show: false});
  }
  componentDidMount() {
    console.log('ComponentDidMount Method');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate Method');
  }
  render() {
    let myheader;
    if(this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
        <center>
          {myheader}
          <button type="button" onClick={this.delHeader}>Delete Header</button><hr/><hr/>
          <h3>count : {this.state.count}</h3>
          <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        </center>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount method");
  }
  render() {
    return(
      <h1>Hello World!</h1>
    ) ;
  }
}

export default App
*/
//bootstrap
/*
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const App = () => {
  return (
    <div>
 <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
    </div>
  )
}

export default App
*/
//material-ui
/*
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];
*/
//downoad images
/*
import React from 'react'
import osiThumbnail from '../src/osiThumbnail.jpg';

const App = () => {
  return (
    <div>
      <center>
      <img src={osiThumbnail} alt="thumbnail" height="250" width="auto" /><br/><br/>
      <a href={osiThumbnail} className='btn btn-primary' download="osiThumbnail">Click here to download</a>
      </center>
    </div>
  )
}
export default App
*/
//emailjs code
/*
import React, {useState} from 'react'
import emailjs from '@emailjs/browser';

const App = () => {
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

export default App
*/
//search filter
import React, { useState } from 'react'
import Data from './city.json'
const App = () => {
  const [search,setSearch] = useState('')
  return (
    <div>
      <center>
        <h4>Enter your city:</h4>
        <input type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)} /><br/ >
        {Data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city => {
          return <div style={{"border":"1px solid black","padding":"10px","margin":"10px","maxWidth":"70%"}}>
        {city.name}
        </div>
        })}
      </center>
    </div>
  )
}

export default App
