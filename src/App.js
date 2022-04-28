import React, { useState } from 'react';
import Controlled from './Components/ContolledUncontrolled/Controlled';
import Uncontrolled from './Components/ContolledUncontrolled/Uncontrolled';
import ImagegallerySnapshot from './Components/ImagegallerySnapshot';
import Routing from './Components/Routing/Routing';
import TodoList from './Components/TodoLists/TodoList';
import Weather from './Components/WeatherApp/Weather';
import Googlemap from './Components/Googlemap';
import Foodrecipe from './Components/FoodRecipe/Foodrecipe';
import FirebaseAuth from './Components/Authentication/FirebaseAuth';

export const App=() =>{
  const [count,setCount] = useState(0);
  return(
    <div>
      <center>
        {/*<Controlled/>
        <Uncontrolled/>
      <Routing/>
      <ImagegallerySnapshot/>
      <TodoList/>
      
      <Weather/>
     <Googlemap/>
     <Foodrecipe/>*/}
     <FirebaseAuth/>
      </center>
    </div>
  )
}

export default App;
