//incomplete didn't get api 
import React, { useState } from 'react'

const ImagegallerySnapshot = () => {
    const [search,setSearch] = useState("");
    const changeHandler = e => {
        setSearch(e.target.value);
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(search);
    }
  return (
    <center>
        <form onSubmit={submitHandler}>
      <h2>Gallery Snapshot</h2>
      <input type="text" value={search} onChange={changeHandler}/><br/><br/>
      <input type="submit" name='search'/>
      </form>
    </center>
  )
}

export default ImagegallerySnapshot
