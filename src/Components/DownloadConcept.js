//downoad images

import React from 'react'
import osiThumbnail from '../src/osiThumbnail.jpg';

const DownloadConcept = () => {
  return (
    <div>
      <center>
      <img src={osiThumbnail} alt="thumbnail" height="250" width="auto" /><br/><br/>
      <a href={osiThumbnail} className='btn btn-primary' download="osiThumbnail">Click here to download</a>
      </center>
    </div>
  )
}
export default DownloadConcept
