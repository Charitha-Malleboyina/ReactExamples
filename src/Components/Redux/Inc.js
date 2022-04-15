import React from 'react'
import { connect } from 'react-redux';
//import { increase,decrease } from './actions';

const Inc = ({count,increase,decrease}) => {
  return (
    <div>
      Count from Inc Component : {count} <br/> <br/>
      <button onClick={() => increase(2)}>Increment</button> &nbsp;&nbsp;
      <button onClick={decrease}>Decrement</button>
    </div>
  )
}

const mapStateToProps = state => ({
  count : state
})
const mapDispatchToProps = (dispatch) => {
  return {
    //displaying plain actions
    increase: (value) => dispatch({type: 'INCREMENT',payload:value}),
    decrease: () => dispatch({type: 'DECREMENT'}),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Inc);
