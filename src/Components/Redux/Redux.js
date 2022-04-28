//redux,mapstatetoprops,mapdispatchtoprops

import React from 'react';
import Inc from './Components/Redux/Inc';
import {connect} from 'react-redux';
//import { increase,decrease } from './Components/Redux/actions';
const Redux = ({count}) => {
  return (
    <div>
      <center>
        Count from App js component : {count} <br/><hr/>
        <Inc/>
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  count : state
})
const mapDispatchToProps = (dispatch) => {
  return {
    //displaying plain actions
    increase: (value) => dispatch({type: 'INCREMENT',
  payload:value}),
    decrease: () => dispatch({type: 'DECREMENT'}),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Redux);