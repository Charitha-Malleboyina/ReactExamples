import React, { useRef } from 'react'

const Uncontrolled = () => {
    const inputRef = useRef('');
    const submiitHandler = e => {
        e.preventDefault();
        alert(inputRef.current.value)
    }
  return (
    <div>
      <form onSubmit={submiitHandler}>
          <input type="text" ref={inputRef} />
          <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default Uncontrolled
