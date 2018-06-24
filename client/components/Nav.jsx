import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/'>ABOUT</Link>
        </li>
        <li>
          <Link to='/'>ASSESS</Link>
        </li>
        <li>
          <Link to='/'>SHARE</Link>
        </li>
        <li>
          <Link to='/'>LEARN</Link>
        </li>

      </ul>
    </div>
  )
}
export default Nav
