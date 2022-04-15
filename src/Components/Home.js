import React from 'react';
import { useNavigate ,useHistory} from "react-router-dom";
import videoFile from '../video.mp4';

const Home = () => {
 
  const navigate = useNavigate();
  //let history = useHistory();
  return (
    <div>
      <center>
        <div>
        <h2>Welcome to Home page</h2>
        <video width="auto" height="250" controls>
          <source src={videoFile} type="video/mp4"/>
        </video>
        </div>
        <div>
       {/*navigating to one page using useNavigate and useNavigate*/}
        <button onClick={() => navigate("/dashboard")}>Login</button>
        {/*
        useHistory is not supporting v6 react router dom where it supports in lower versions
        <button onClick={()=> history.push('/dashboard')}>Login</button>*/}
  </div>
      </center>

    </div>
  )
}

export default Home
