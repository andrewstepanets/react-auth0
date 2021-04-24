import React from 'react'
import { Link } from 'react-router-dom'

import './nav.styles.scss'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Nav