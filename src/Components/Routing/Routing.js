//routing,usecontext

import React from 'react';
//this navbar.js is the local file
import Navbar from './Navbar'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Header from './Header';

export const UserContext = React.createContext();
const Routing = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
        <Navbar/>
        <UserContext.Provider value="sending value from one component(Header.js) to another using useContext">
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
export default Routing
