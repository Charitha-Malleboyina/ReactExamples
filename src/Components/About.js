import React from 'react'
import ReactLogo from '../react.png';
import AudioFile from '../music.mp3';

const About = () => {
  return (
    <div>
      <center>
    <h3>Welcome to about page</h3>
    <div>
    <audio controls>
      <source src={AudioFile} type="audio/ogg"/>
    </audio>
    </div>
    <img src={ReactLogo} height="250" width="auto"/>
    <h4>React Logo</h4>
</center>
    </div>
  )
}

export default About
