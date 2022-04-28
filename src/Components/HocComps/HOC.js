import React, { Component } from 'react'

const HOC = (Component) => {
  return (
    class extends React.Component{
      state = {
          auth:true
      }
        render(){
            return(
                <div>
                    {this.state.auth ? <Component name="Mary"/> : <h1>Please Login</h1>}
                </div>
            )
        }
    }
  )
}

export default HOC
