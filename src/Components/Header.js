import React from 'react'
import { UserContext } from '../App';

const Header = () => {
  return (
    <div>
      <UserContext.Consumer>
        {value => <div>{value}</div>}
      </UserContext.Consumer>
    </div>
  )
}

export default Header
