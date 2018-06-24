import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='nav'>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/'>SOCIAL MEDIA</Link>

        </li>

      </ul>
    </div>
  )
}
export default Footer
