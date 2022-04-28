import React from 'react';
//if we use just export in the component we use { } in the import sttement
import { Footer } from './Components/Footer';
//if we use just export default in the component we use { } in the import sttement
import Header from './Components/Header'
import Home from './Components/Home'

const Export = () => {
  return (
    <div>
      <Home/>
      <Header/>
      <Footer/>
    </div>
  )
}
export default Export